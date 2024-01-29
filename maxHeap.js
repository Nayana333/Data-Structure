class maxHeap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getleftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
    heapifyup(index){
        let parentindex=this.getParentIndex(index)
        if(parentindex>=0&&this.heap[parentindex]<this.heap[index]){
            this.swap(index,parentindex)
          this.heapifyup(parentindex)
            }   
    }
    // heapifydown(index){
    //     let leftChildIndex=this.getleftChildIndex(index)
    //     let rightChildIndex=this.getRightChildIndex(index)
    //    let  maxIndex=index


    //     if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
    //         maxIndex = leftChildIndex;
    //     }
    //     if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
    //         maxIndex = rightChildIndex;
    //     }
        
    //     if(maxIndex!==index){
    //         this.swap(index,maxIndex)
    //         this.heapifydown(maxIndex)
    //     }
    // }

    heapifydown(index) {
        let leftChildIndex = this.getleftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
        let maxIndex = index;
    
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
            maxIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
            maxIndex = rightChildIndex;
        }
    
        if (maxIndex !== index) {
            this.swap(index, maxIndex);
            this.heapifydown(maxIndex);
        }
    }
    
    insert(value){
        this.heap.push(value)
        this.heapifyup(this.heap.length-1)
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
           return this.heap.pop()
        }
        let max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown(0)
        return max

    }
    sortHeap(){
      let  sortedHeap=[]
        while(this.heap.length>0){
            sortedHeap.push(this.remove())
        }
        return sortedHeap
    }
    buildHeapnArray(array){
        let firstNonLeafIndex=Math.floor((array.length-2)/2)
        for(let i=firstNonLeafIndex;i>=0;i--){
            this.heapifydown(i)
        }
    }
}
const maxheap=new maxHeap()
maxheap.buildHeapnArray([2,6,3,1,8,5])
console.log(maxheap.heap); 

