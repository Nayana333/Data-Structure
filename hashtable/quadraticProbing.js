class quadraticProbing{
    constructor(size){
        this.key=new Array(size)
        this.value=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
    }
    set(key,value){
        const index=this.hash(key)
        while(this.index!==undefined){
           index=(index+2 **2)%this.size
        }
        this.key[index]=key
        this.value[index]=value
    }
    get(key){
        let index=this.hash(key)
        while(this.index!==key){
            index=(index+i **2)%this.size
            if(this.index!==undefined){
                return null

        }
       

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
const hash=new quadraticProbing(50);
hash.set("in","india")
hash.set("fr","france")
console.log(hash.get("fr"));
hash.remove("in");
hash.display();