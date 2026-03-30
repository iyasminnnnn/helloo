let task=document.querySelector(".task")
 task.innerHTML=`
      <div class="bg-white w-xl h-[500px] overflow-scroll p-[15px]">
         <form class="flex mt-[10px] p-[10px] form">
        <input type="text" class="w-full border-y border-l border-gray-300 h-[40px] rounded-y-[15px] rounded-l-[15px] input" placeholder="  Add your task">
        <button class="bg-[#87BAC3] border-y border-r rounded-y-[15px] rounded-r-[15px] w-[60px] border-gray-300">Add</button>
    </form>
    <p class="text-center text-[30px] font-[600] text-[#87BAC3] font-[Commissioner] ">Task List</p>
        <div class="list">
        </div>
        <button class="w-full border rounded-[20px] border-gray-300 h-[45px] p-y-[20px] bg-[#53629E] my-[20px] clear">Clear All</button>
    </div>
    `
let list = document.querySelector(".list");
let input=document.querySelector(".input")
let form=document.querySelector(".form")
let work=document.querySelector(".work")
let study=document.querySelector(".study")
let person=document.querySelector(".person")
let active="work"
const storage={work:document.createElement("ul"),
    study:document.createElement("ul"),
    person:document.createElement("ul"),
}
function switchcat(cat){
active=cat

list.innerHTML=""
list.appendChild(storage[active])
}
work.addEventListener("click",()=>{
      switchcat("work")
})
study.addEventListener("click",()=>{
  switchcat("study")
})
person.addEventListener("click",()=>{
      switchcat("person")
})
    form.addEventListener("submit",(e)=>{
    e.preventDefault();
       if (input.value.trim() !== "") {
     let taskText = document.createElement("span");
       let group=document.createElement("div")
        group.className="flex gap-[20px]"

        let li = document.createElement("li");
        let done=document.createElement("button")
        let deletee=document.createElement("button")
        let yes=document.createElement("div")
        li.className = "border-y border-x py-2 text-gray-800 rounded-r-[20px] rounded-l-[20px] flex w-full justify-between p-[10px] items-center my-[10px]";
        taskText.textContent = input.value;
       
        
        done.textContent="Done"
        done.className="done bg-[#87BAC3] w-[60px] h-[50px] rounded-[20px]"
        deletee.textContent="Delete"
        deletee.className="done bg-[#53629E] w-[60px] h-[50px] rounded-[20px]"
        deletee.addEventListener("click",()=>{
            li.remove()
        });
        done.addEventListener("click",()=>{
            if(yes.innerHTML===""){
                 yes.innerHTML=`<i class="fa-solid fa-check"></i>`
            }
           else{
            yes.innerHTML=""
           }
            done.classList.toggle("bg-[#BB8ED0]")
            done.classList.toggle("bg-[#53629E]");
           taskText.classList.toggle("line-through");
            taskText.classList.toggle("opacity-50");
        });
        
        li.appendChild(taskText)
        li.appendChild(yes)
        li.appendChild(group)
        group.appendChild(done)
        group.appendChild(deletee)
        storage[active].appendChild(li)
       
        input.value = "";
        
}})
 clear=document.querySelector(".clear")
        clear.addEventListener("click",()=>{
         storage[active].innerHTML=""
        })
switchcat("work")



