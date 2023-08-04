// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BalanceReader {
    function getBalances(
        address _user,
        address[] memory _tokens
    ) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory balances = new TokenBalance[](_tokens.length);

        for (uint i = 0; i < _tokens.length; i++) {
            IERC20 token = IERC20(_tokens[i]);
            balances[i] = TokenBalance(_tokens[i], token.balanceOf(_user));
        }

        return balances;
    }

    struct TokenBalance {
        address token;
        uint256 balance;
    }
}
