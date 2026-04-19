async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        const list = document.querySelector(".list");

        const htmlContent = data.map(user => `

             <div class="user-card border h-[300px] p-5">
                <li class="mt-5"><strong>Phone:</strong> ${user.phone}</li>
                <li class="mt-5"><strong>Lng:</strong> ${user.address.geo.lng}</li>
                <li class="mt-5"><strong>BS:</strong> ${user.company.bs}</li>
            </div>
           
            
        `).join(''); 

        list.innerHTML = htmlContent;
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
let button=document.querySelector(".button")
button.addEventListener("click",()=>{
getData();
button.className="hidden"
})
