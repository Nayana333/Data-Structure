const str='roadSidecoder youtube channel'
console.log(str);
const tild=`subscribe ${str}`
console.log(tild);

//length of string

console.log('length=',str.length);

//accsessing character

console.log(str[7]);
console.log('using charat',str.charAt(3));

looping

for(let i=0;i<str.length;i++){
     console.log(str[i]);
}

//replace character

console.log(str.replace('road','map'));

//replace all

console.log(str.replaceAll('a','z'));

//concatunation

const newStr=str.concat(' for string programs')
console.log(newStr);

//searching

console.log(str.indexOf("e"));
console.log(str.lastIndexOf('t'));

//extract substring

console.log(str.substring(9,16));

//convert

const convert={name:'nayana'}
console.log(JSON.stringify(convert));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//compare string

const string1='channel'
const string2='nayana raveendran'
console.log(string1.localeCompare(string2));
console.log(string2.includes('nayana'));

//split and join

console.log(str.split('r'));
const arr=['apple','banana']
console.log(arr.join('   and  '));


// maxlength

function truncate(str,maxLength){
    if(str.length> maxLength){
        return str.slice(0,maxLength-1)+'....'

    }else{
        return str
    }
}
console.log(truncate('nayana raveendran',6));

///pallindrome

function pallindrome(x){
    const reverse=+x.toString().split(" ").reverse().join("")
console.log(reverse);
}
console.log(pallindrome(121));
//string palllindrome

function pallindromeString(x){
    const orginal=x.toLowerCase().trim()
    const reverse=x.split("").reverse().join('')
    if(orginal===reverse){
        console.log('true');
    }else{
        console.log('false');
    }
}
console.log(pallindromeString('wdwd'));

//hamming string


function hammingDistance(x,y){
    let distance=0
    if(x.length !== y.length){
        console.log('length not same');

    }
    else{
        for(let i=0;i<=x.length;i++){
            if(x[i]==y[i]){
                distance++
            }
        }
    }
    return distance
}

console.log(hammingDistance('hello','hello'));