let pass=document.querySelector(".inputpass")
let mail=document.querySelector(".inputmail")
let visible=document.querySelector(".fa-eye")
let invisible=document.querySelector(".fa-eye-slash")
let inp=document.querySelector(".in")
let button=document.querySelector(".button")
let rightemail=document.querySelector(".regex")
const emailRegex = /^[\w\.]+@[\w\.]+\.\w{3,}$/;
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
// button.addEventListener("click", () => {
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
    if (emailRegex.test(mail.value.trim())) {
        rightemail.style.display = "none";
    }
});
button.addEventListener("click", (e) => {
    e.preventDefault();
    let email = mail.value.trim();
    let password = pass.value.trim();
    let errorMessages = document.querySelectorAll(".wrong");

    errorMessages.forEach(el => el.style.display = "none");

    if (!email || !password) {
        alert("Enter all fields");
        return;
    }

   if (emailRegex.test(email)){
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
            
            let user = data.find(u => u.email === email);

            if (user) {
                if (user.password === password) {
                    window.location.href = "main.html";
                } else {
                    errorMessages[1].style.display = "block";
                }
            } else {
                errorMessages[0].style.display = "block";
            }

        })
        .catch(err => {
            console.error(err);
            alert("Server error: " + err.message);
        });
   }
   else{
    rightemail.style.display="block"
   }
   
});