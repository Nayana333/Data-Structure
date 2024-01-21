function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        j=i-1
        while(j >=0 && arr[j]> numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
    return arr
}
let arr=[-2,4,7,1]
console.log(arr);
console.log(insertionSort(arr));