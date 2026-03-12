// let list=document.querySelectorAll("li")
// document.querySelector("li").innerHTML="dnjsbfwhjbfwjbfwgfbuj"
// console.log(list)
let b=prompt("which number in array:")
let a=[]
let s=prompt("How many nums ib array")
for(let j=0;j<s;j++){
    let z=prompt("add a num")
    a.push(z)
}
function howmany(a,k){
for(let i=0;i<a.length;i++){
    if(a[i]==b ){
        k=k+1
    }
}
return k
}
console.log(howmany(a,0))