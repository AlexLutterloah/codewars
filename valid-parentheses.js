///////////////////////
///// ~ PROBLEM ~ /////
///////////////////////
/*

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/
////////////////////////
///// ~ SOLUTION ~ /////
////////////////////////

function validParentheses(parens) {
    let count = 0;

    for (var i in parens) {
        if (parens[i] === "(") {
            count++;
        }
        if (parens[i] === ")") {
            count--;
        }
        if (count < 0) {
            return false;
        }
    }
    return count == 0;
}

console.log(validParentheses("()"));
