///////////////////////
///// ~ PROBLEM ~ /////
///////////////////////
/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
////////////////////////
///// ~ SOLUTION ~ /////
////////////////////////

function moveZeros(arr) {
    let newArr = arr.filter((element) => element !== 0);
    let zeroCount = arr.length - newArr.length;
    while (zeroCount != 0) {
        newArr.push(0);
        zeroCount--;
    }
    return newArr;
}

console.log(
    moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
);
