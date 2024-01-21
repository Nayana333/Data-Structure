class Hashtable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[key,value]
        }else{
            let sameKeyItem=bucket.find((item)=>item===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }

        }
    }
    get(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem
            }
        }
        return undefined

    }
    remove(key){
        let index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            let samevalueIndex=bucket.find((item)=>item[0]===key)
            if(samevalueIndex){
                bucket.splice(bucket.indexOf(samevalueIndex),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
let hash=new Hashtable(20)

hash.set('age','21')
hash.set('place','Ernakulam')
hash.set('name','nayana')
hash.set('mane','mango')
hash.set('number','9')
hash.display()
hash.remove('mane')
hash.display()
