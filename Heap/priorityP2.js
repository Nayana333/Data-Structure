class Heap{
    constructor(){
        this.heap=[]
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]=this.heap[index2],this.heap[index1]]
    }
    getParentIndex(){
        return ((index-1)/2)
    }
    bubbleUp(index){
        let parentIndex=this.getParentIndex(index)
        if(parentIndex>0 && this.heap[parentIndex].priority>this.heap[index].priority){
            this.swap(index,parentIndex)
            this.bubbleUp(parentIndex)
        }
    }
    getLeftChild(index){
        return 2*index+1
    }
    getRightChild(index){
        return 2*index+2
    }
    bubbleDown(index){
        let leftChild=this.getLeftChild(index)
        let rightchild=this.getRightChild(index)
        let minIndex=index
        if(leftChild<this.heap.length && this.heap[leftChild].priority>this.heap[minIndex].priority){
            minIndex=leftChild
        }
        if(rightchild<this.heap.length && this.heap[rightchild].priority>this.heap[minIndex].priority){
            minIndex=rightchild
        }
        if(index!==minIndex){
            this.swap(index,minIndex)
            this.bubbleDown(minIndex)
        }
    }

    insert(value,priority){
        let element={value,priority}
        this.heap.push(element)
        this.heapifyUp(this.heap.length-1)
    }
    extract(){
        let firstIndex=this.heap[0]
        let lastIndex=heap.pop()
       this.heap[0]=lastIndex
       if(this.heap.length>0){
        this.bubbleDown(0)
       }
       return firstIndex

    }
    
}