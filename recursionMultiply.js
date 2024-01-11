
console.log(factorial(9));
function multiply(arr){
    if(arr.length<=0){
        return 1
    }else{
        return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
    }
}
console.log(multiply([2,4,6]));