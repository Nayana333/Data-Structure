class Graph{
    constructor(){
        this.adjacetList={}
    }
    addVertex(vertex){
        if(!this.adjacetList[vertex]){
            this.adjacetList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacetList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacetList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacetList[vertex1].add(vertex2)
        this.adjacetList[vertex2].add(vertex2)
    }

    hasEdge(vertex1,vertex2){
        return(this.adjacetList[vertex1].has(vertex)&& this.adjacetList[vertex2].has(vertex1))
    }

   display(){
    for(let vertex in this.adjacetList){
        console.log(vertex+"-->"+[...this.adjacetList[vertex]]);
    }
   }
   deleteEdge(vertex1,vertex2){
    this.adjacetList[vertex1].delete(vertex2)
    this.adjacetList[vertex2].delete(vertex1)
   }
   deleteVertex(vertex){
    if(this.adjacetList[vertex]){
        return null
    }
    for(let adjacenctVertex in this.adjacetList){
        this.deleteEdge(adjacenctVertex,vertex)

    }
    delete this.adjacetList[vertex]
   }
   dfs(startVertex,visited={}){
    if(!this.adjacetList[startVertex]) return
    console.log(startVertex);
    visited[startVertex]=true
    for(let neighbor of this.adjacetList[startVertex]){
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
    for(let neighbor of this.adjacetList[currentVertex]){
        if(!visited[neighbor]){
            visited[neighbor]=true
            queue.push(neighbor)
        }
    }
   }




}