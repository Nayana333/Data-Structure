//find duplicate element

const arr=[2,5,9,2,6]
const duplicate=arr.filter((ele,index,arr)=>arr.indexOf(ele) !==index)
console.log(duplicate)


//find maximum


const maximum=(arr)=>{
    return arr.reduce(function(prev,curr){
        return prev>curr?prev:curr

    })
}

console.log(maximum([2,7,4,1]));


// ///2ndlargest

const largestValue=(arr)=>{
    const largest=Math.max(...arr)
    index=arr.indexOf(largest);
    arr.splice(index,1)
    const second=Math.max(...arr)
    return second
}
console.log(largestValue([8,5,2,0]));

//missing element


const missing=[];
const missingValue=(arr)=>{
    const minValue=Math.min(...arr)
    const maxValue=Math.max(...arr)
    for(i=minValue;i<=maxValue;i++){
        if(arr.indexOf(i)<0){
            missing.push(i)
        }
    }
    return missing
}
console.log(missingValue([1,3,4,5]));

//even
let array=[3,5,2,7,8];
    const evenValue=array.filter((item)=>{
        return item%2 ===0
    })
console.log(evenValue);

 //prime

var number=8
if(number===1){
    console.log('1 is not  a prime');
}
else 
{
    for(i=1;i<=number;i++)
    {
        if(number%i===0){
           console.log('divisible by',i);
        }
       
    }
}



//includes

let vowelsValue = (str) => {
    str = 'nayana'; 
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
   
    console.log(count);
}

//sort and merge



var arr1=[2,3,4]
var arr2=[5,6,7]
const merged=arr1.concat(arr2)
console.log(merged);
const sorted=merged.sort((a,b)=>{
    return b-a
})
console.log(sorted);




