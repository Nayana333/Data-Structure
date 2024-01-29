class Node{
    constructor(){
        this.root={}
        this.children=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            charToInsert=word[i]
            if(!curr.children.hasOwnProperty(charToInsert)){
                curr.children[charToInsert]=new Node()
            }
            curr=curr.children[charToInsert]
        }
        curr.isWordEnd=true
    }
    contains(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToFind=word[i]
            if(!curr.children.hasOwnProperty(charToFind)){
                return false
            }
            curr=curr.children[charToFind]
        }
        curr.isWordEnd=true

    }
    delete(word){
        if(!this.contains(word)){
            console.log(`word "${word}" not in the trie`);
        }
        this.deleteHelper(this.root,word,0)
        console.log(`word"${word}" deleted`)
    }
    deleteHelper(node,word,index){
        if(index===word.length){
            this.isWordEnd=false
            return
        }
        let charToDelete=word[index]
        let nextNode=this.children[charToDelete]
        this.deleteHelper(nextNode,word,index+1)
      
        if(Object.keys(nextNode.children).length ===0 && !nextNode.isWordEnd){
            delete Node(charToDelete)
        }
    }
}

