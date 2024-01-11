function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let middle=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[middle]){
            return middle;
        }
        if(target<arr[middle]){
            rightIndex=middle-1;
        }
        else{
            leftIndex=middle+1
        }

    }
               
}
let ans=(binarySearch([2,5,8,9],8))
console.log(ans);
