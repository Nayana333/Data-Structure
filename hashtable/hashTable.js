class Hashtable{
    constructor(size){
        this.size=size;
        this.table=new Array(size)
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        const index=this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}

let hash=new Hashtable(20)

hash.set('age','21')
hash.set('place','Ernakulam')
hash.set('name','nayana')
hash.display()

