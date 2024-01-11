function binarySearch(arr,target){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let mid=Math.floor((leftIndex+rightIndex)/2);
    
    if(arr[mid]===target){
        return mid
        
    }
    else{
        if(target<arr[mid]){
            rightIndex=mid-1
        }else{
            leftIndex=mid+1
        }
    }

}
}
let ans=binarySearch([2,5,7,8],5)
console.log(ans);