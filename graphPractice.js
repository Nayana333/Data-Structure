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
    hesEdge(vertex1,vertex2){
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
            this.deleteEdge(adjacentVertex,vertex)
        }
        delete this.adjacentList[vertex]
    }

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex+"-->"+[...this.adjacentList[vertex]]);
        }
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
            let currentIndex=queue.shift()
            for(let neighbor of this.adjacentList[currentIndex]){
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            }
        }
        
    }
}

const graph=new Graph()
graph.addVertex(10)
graph.addVertex(20)
graph.addVertex(30)
graph.display()
graph.addEdge(10,20)
graph.display()


