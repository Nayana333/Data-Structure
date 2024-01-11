const largestValue=(arr)=>{
    const  largest=Math.max(...arr)
    index=arr.indexOf(largest)
    arr.splice(index,1)
    const sec=Math.max(...arr)
    console.log(sec);
}
console.log(largestValue([3,7,4,2]));

