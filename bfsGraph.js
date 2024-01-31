class Graph{
    constructor(){
        this.adjacentList={}
    }
    addVertex(vertex){
       if (!this.adjacentList[vertex]){
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
    deleteEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)

    }
    deleteVertex(vertex){
        if(!this.adjacentList[vertex]){
            return null
        }
        for(let adjacentVertex in this.adjacentList){
            this.deleteEdge(vertex,adjacentVertex)
        }
        delete this.adjacentList[vertex]
    }
    dfs(startVertex,visited={}){
        if(!this.adjacentList[startVertex]) return
            console.log(startVertex);
            visited[startVertex]=true
            for(let neighbor of this.adjacentList[startVertex]){
                if(!visited[neighbor]){
                    this.dfs(neighbor,visited)
                }
            }
        
    }
    bfs(startVertex){
        let queue=[startVertex]
        let visited={[startVertex]:true}
        while(queue.length>0){
            let currentVertex=queue.shift()
            console.log(currentVertex);
        }
        for(neighbor of this.adjacentList[currentVertex]){
            if(!visited[neighbor]){
                visited[neighbor]=true
               queue.push(neighbor)
            }
        }
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
graph.addVertex("D")


graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("D","C")



console.log("hasEdge",graph.hasEdge("A","B"));
graph.display()
console.log('.......delete edge.......');

graph.deleteEdge("B","C")
graph.display()

console.log('.......delete Vertex.......');
graph.deleteVertex("D")
graph.display()

console.log("........DFS........");
graph.dfs('B')
console.log("........BFS........");
graph.dfs('A')