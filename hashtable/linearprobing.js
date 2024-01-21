class Hashtable{
    constructor(size){
    this.key=new Array(size)
    this.value=new Array(size)
    this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index=this.hash(key)
        while(this.key!==undefined){
            index=(index+1)%this.size
        }
        this.key[index]=key
        this.index[value]=value
    }
    get(key){
        let index=this.hash(key)
        while(this.key!==undefined){
            return null
        }
        return this.value[index]
    }
    display(){
        for(let i=0;i<this.key.length;i++){
        if(this.key[i]){
            console.log(`key:${this.key} value:${this.value}`);
        }
        }
    }
}

const hash=new Hashtable(50);
hash.set("in","india")
hash.set("fr","france")
console.log(hash.get("fr"));
hash.remove("in");
hash.display();