class Hashtable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    hash(key){
        let total=0;
        for(let i=0;i<table.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }
    remove(){
        let remove=this.table[index]
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



//collision


class hashtable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,size){
        const index=this.hash(key)
        const bucket=this.item[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem=bucket.find((item)=>item===key)
            if(sameKeyItem)
            {
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
       
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find((item)=>item===key)
            if(sameKeyItem){
                return sameKeyItem
            }
        }
        return undefined

    }
    remove(){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find((item)=>item===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }

    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);

            }
        }
    }
}