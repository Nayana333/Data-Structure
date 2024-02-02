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
            if(!curr.children.hasOwnProperty[charToInsert]){
                current.children[charToInsert]=new Node()
            }
            curr=curr.children[charToInsert]
        }
        this.isWordEnd=true
    }
    contains(word){
        let curr=this.root
        for(let i=0;i<word.length;i++){
            let chartToFind=word[i]
            if(!curr.children.hasOwnProperty[chartToFind]){
                return false
            }
            curr=curr.children[chartToFind]
        }
        return this.isWordEnd
    }

    startWithPrefix(prefix){
        let curr=this.root
        for(let i=0;i<prefix.length;i++){
            let charToFind=prefix[i]
            if(!curr.children.hasOwnProperty[charToFind]){
              return false
            }
            curr=curr.children[charToFind]
        }
        return true
    }
    delete(word){
        if(!this.contains(word)){
            console.log(`this word "${word}" is not found`);
        }
        delete_helper(this.root,word,0)
        console.log(`word "${word}" is deleted`);
    }
    delete_helper(node,word,index){
        if(index===word.length){
            node.isWordEnd=true
            return
        }
        let charToDelete=word[index]
        nextNode=this.children[charToDelete]
        this.delete_helper(nextNode,word,index+1)
        if(Object.keys(nextNode.children).length===0&&!nextNode.isWordEnd){
            delete Node(charToDelete)
        }
    }
    display(){
        this.displayHelper(this.root," ")
    }
    displayHelper(node,currentString){
        if(node.isWordEnd){
            console.log(currentString);
        }
        for(const char in node.children){
            if(node.children.hasOwnProperty(char)){
                this.displayHelper(node.children[char],currentString+char);
            }
        }
    }
}