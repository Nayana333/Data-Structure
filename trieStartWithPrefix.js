class Node{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let charToInsert=word[i]
            if(!curr.children.hasOwnProperty(charToInsert))
            {
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
       return curr.isWordEnd=true
    }
    startWithPrefix(prefix){
        let curr=this.root
        for(let i=0;i<prefix.length;i++){
            let charToFind=prefix[i]
            if(!curr.children.hasOwnProperty(charToFind)){
               return false
            }
            curr.children[charToFind]

        }
        return true
    }
   

    
}