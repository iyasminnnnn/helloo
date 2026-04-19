let pass=document.querySelector(".inputpass")
let mail=document.querySelector(".inputmail")
let namee=document.querySelector(".inputname")
let visible=document.querySelector(".fa-eye")
let invisible=document.querySelector(".fa-eye-slash")
let inp=document.querySelector(".in")
let button=document.querySelector(".button")
let ent = document.querySelectorAll(".ent");
let rightemail=document.querySelector(".regex")
const regex = /^[\w\.]+@[\w\.]+\.\w{3,}$/;
visible.addEventListener("click",()=>{
        visible.style.display="none"
        invisible.style.display="block"
        inp.type="text"
})
invisible.addEventListener("click",()=>{
        invisible.style.display="none"
        visible.style.display="block"
        inp.type="password"
})
// function getUsers() {
//     return JSON.parse(localStorage.getItem("users")) || [];
// }
// function saveUsers(users) {
//     localStorage.setItem("users", JSON.stringify(users));
// }
// button.addEventListener("
// click", () => {
//     let email = mail.value;
//     let password = pass.value;
//     let users = getUsers();
//     let user = users.find(u => u.email === email && u.password === password);
//     if (user) {
//         document.body.innerHTML = `
//             <div class="flex items-center justify-center h-screen text-white text-3xl">
//                 Welcome to the site 
//             </div>
//         `;
//         return;
//     }
//     let exists = users.find(u => u.email === email);
//     if (!exists) {
//         let confirmSignup = confirm("Account not found. Create new account?");
//         if (confirmSignup) {
//             users.push({
//                 email: email,
//                 password: password
//             });
//             saveUsers(users);
//             alert("Account created! Now sign in again.");
//             pass.value = "";
//         }
//     } else {
//         alert("Wrong password!");
//     }
// });
mail.addEventListener("input", () => {
    if (regex.test(mail.value.trim())) {
        rightemail.style.display = "none";
    }
});
button.addEventListener("click", (e) => {
    e.preventDefault();

    let email = mail.value.trim();
    let password = pass.value.trim();
    let nameee=namee.value.trim()
     if (!nameee) {

       ent[0].style.display="block"
    }
    if (!email) {

       ent[1].style.display="block"
    }
     if (!password) {

       ent[2].style.display="block"
    }
    namee.addEventListener("input",()=>{
        ent[0].style.display="none"
    })
    mail.addEventListener("input",()=>{
         ent[1].style.display="none"
    })
    pass.addEventListener("input",()=>{
        ent[2].style.display="none"
    })
    if(nameee && password && email){
 fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {

            let found = data.find(u => u.email === email);

            if (found) {
                alert("This email already exists");
                return;
            }
            else{
             
                if(regex.test(email)){
            alert("Account created!");
            mail.value = "";
            pass.value = "";
            namee.value=";"
                 return fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({nameee, email, password })
            });
                }
                else{
                    rightemail.style.display="block"
                }
     
            }
       
        })
            .catch(err => {
            console.log(err);
            alert("Server error: " + err.message);
        });
    }
});