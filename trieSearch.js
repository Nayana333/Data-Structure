class Node{
    constructor(){
        this.children={}
        this.isWOrdEnd=false
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
            if(!curr.children.hasOwnProperty(charToInsert)){
                curr.children[charToInsert]=new Node()
            }  
            curr=curr.children[charToInsert]         
        
    }
    curr.isWOrdEnd=true
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
    return curr.isWOrdEnd
}
}
let trie=new Trie()
trie.insert('mango')
trie.insert('banana')
console.log(trie.contains('apple'));