function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]

        let j=i-1;
        while(j >=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
        }
        arr[j+1]=numberToInsert
    }
}
console.log(insertionSort(4,9,1,5));