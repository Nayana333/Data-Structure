function fibonnacci(n){
    const fib=[0,1]
    for(let i=2;i<5;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;
}
console.log(fibonnacci(6))