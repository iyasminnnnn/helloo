let change=document.querySelector(".change")
let color=document.querySelector(".color")
let bodybg=document.querySelector(".body")
change.addEventListener("click",()=>{
    let colornum="0123456789ABCDEF"
    let colorr="#"
    for (let i=0;i<6;i++){
        colorr+=colornum[Math.floor(Math.random()*16)]
    }
    bodybg.style.background=colorr 
    color.innerHTML=`${colorr}`
})