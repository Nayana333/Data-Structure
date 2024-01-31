class Graph{
    constructor(){
        this.adjacentList={}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (this.adjacentList[vertex1].has(vertex2) && this.adjacentList[vertex2].has(vertex1))
    }
    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex+"->"+[...this.adjacentList[vertex]]);
        }
    }
}

let graph=new Graph()
graph.addVertex('A')
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
console.log("hasEdge",graph.hasEdge("A","B"));
graph.display()
