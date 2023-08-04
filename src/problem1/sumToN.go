/*
 Duration: You should not spend more than **2 hours** on this problem.
*Time estimation is for internship roles, if you are a software professional you should spend significantly less time.

Provide 3 unique implementations of the following function.

**Input**: `n` - any integer 

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

package main

import "fmt"

func sum_to_n_a(n int) int {
	total := 0
	for i := 1; i <= n; i++ {
		total += i
	}
	return total
}

func sum_to_n_b(n int) int {
	if n == 0 {
		return 0
	}
	return n + sum_to_n_b(n-1)
}

func sum_to_n_c(n int) int {
	return (n * (n + 1)) / 2
}


func main() {
	resulta := sum_to_n_a(5)
	resultb := sum_to_n_b(5)
	resultc :=sum_to_n_c(5)
	fmt.Println(resulta) // Output: 15
	fmt.Println(resultb)
	fmt.Println(resultc)
}
