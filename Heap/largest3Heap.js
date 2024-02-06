function heapSort(arr) {
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    return arr;
}

function heapify(arr, rootIndex, size) {
    let largestIndex = rootIndex;
    let leftChildIndex = 2 * rootIndex + 1;
    let rightChildIndex = 2 * rootIndex + 2;

    if (leftChildIndex < size && arr[leftChildIndex] > arr[largestIndex]) {
        largestIndex = leftChildIndex;
    }
    if (rightChildIndex < size && arr[rightChildIndex] > arr[largestIndex]) {
        largestIndex = rightChildIndex;
    }

    if (largestIndex !== rootIndex) {
        [arr[rootIndex], arr[largestIndex]] = [arr[largestIndex], arr[rootIndex]];
        heapify(arr, largestIndex, size);
    }
}

function findLargestThree(arr) {
    let sortedArray = heapSort(arr);
    let length = sortedArray.length;

    if (length < 3) {
        return sortedArray;
    } else {
        return [sortedArray[length - 1], sortedArray[length - 2], sortedArray[length - 3]];
    }
}

let arr = [30, 20, 42, -48];
console.log(findLargestThree(arr));
 