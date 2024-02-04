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
            if(!curr.children.hasOwnProperty(charToInsert)){
                curr.children[charToInsert]=new Node()
            }
            curr=curr.children[charToInsert]
        
        curr.isWordEnd=true
    }
}
    contains(word){
        let curr=this.root
        for(let i=0;i<word.lenth;i++){
            charToFind=word[i]
            if(!curr.children.hasOwnProperty(charToFind)){
                return false
            }
            curr=curr.children[charToFind]
        }
        return curr.isWordEnd
    }
    display(){
        this.display_helper(this.root," ")
    }
    display_helper(node,currentString){
       if(node.isWordEnd){
        console.log(currentString);
       }
        for(let char in node.children){
            this.display_helper(node.children[char],currentString+char)
        }
       

    }
    startWithPrefix(prefix){
        let curr=this.root
        for(let i=0;i<prefix.length;i++){
            let charToFind=prefix[i]
            if(!curr.children.hasOwnProperty(charToFind)){
                return false
            }
            curr=curr.children[charToFind]
        }
    return true
    }
    delete(word){
        if(!this.contains(word)){
            console.log(`the word "${word}" is not found in the trie`);
        }
        this.delete_helper(this.root,word,0)
        console.log(`the word "${word}" deleted from trie`);
    }

    delete_helper(node,word,index){
        if(index===word.length){
            node.isWordEnd=true
            return
        }
        let charToDelete=word[index]
        nextNode=this.children[charToDelete]
        this.delete_helper(nextNode,word,index+1)
        if(Object.keys(nextNode.children).length===0 && !nextNode.isWordEnd){
            delete Node(charToDelete)
        }
    }

}


const trie=new Trie()
trie.insert('apple')
trie.insert('world')
trie.display()
console.log("startWithPrefix:",trie.startWithPrefix("app"))