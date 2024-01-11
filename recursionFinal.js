//multiply array

// function multiply(arr){
//     if(arr.length<=0){
//         return null
//     }else{
//         return arr[arr.length-1]  * multiply(arr.slice(0,arr.length-1))
//     }
// }
// console.log(multiply([2,4,6]));


// function factorial(n){
//     if(n===0){
//         return 1
//     }else{
//         return n * factorial(n-1)
    
//     }
    
//     }
//     console.log(factorial(5));

// function rangeOfNumbers(startNum,endNum){
//     if(startNum>endNum)
// {
//    return []
// }else{
//     const number=rangeOfNumbers(startNum,endNum-1);
//         number.push(endNum)
//         return number
    
// }

// }
// console.log(rangeOfNumbers(2,6));

// function fibonacci(n){
//     if(n<=1){
//         return 1
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }
// console.log(fibonacci(5));

function reverseString(str){
    if(str===''){
        return ''
    }else{
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}
console.log(reverseString('hello'));



