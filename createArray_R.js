function rangeOfNumbers(startNum,endNum){
    if(endNum<startNum){
        return []
    }else{
        const number=rangeOfNumbers(startNum,endNum-1)
        number.push(endNum)
        return number
    }
}
console.log(rangeOfNumbers(3,8));