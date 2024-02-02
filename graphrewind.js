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
    hasedge(vertex1,vertex2){
        return (this.adjacentList[vertex1].has(vertex2)&& this.adjacentList[vertex2].add(vertex1))
    }
    deleteEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex2)
    }
    deleteVertex(vertex){
        if(!this.adjacentList[vertex]){
            return null
        }
       for(let adjacenctVertex in this.adjacentList){
        this.deleteEdge(vertex,adjacenctVertex)
       }
       delete this.adjacentList[vertex]
    }
    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex+'-->'+[...this.adjacentList[vertex]]);
        }
    }

    dfs(startVertex,visited={}){
        if(!this.adjacentList[startVertex]) return
            console.log(startVertex);
            visited[startVertex]=true
            
        
        for(let neighbor in this.adjacentList[startVertex]){
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
            console.log(currentIndex);
            }
            for(let neighbor of this.adjacentList[currentIndex]){
                if(!visited[currentIndex]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            }

        }
    }



let graph=new Graph()
graph.addVertex(10)
graph.addVertex(20)
graph.addVertex(30)
graph.addEdge(30,20)
graph.addEdge(10,30)
console.log('has edge',graph.hasedge(10,20));
graph.display()
console.log('//////////////////');
graph.deleteEdge(20,30)
graph.display()
graph.deleteVertex(10)
graph.display()