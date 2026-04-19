let button=document.querySelector(".button")
let mail=document.querySelector(".inputmail")
let rightemail=document.querySelector(".regex")
  const emailRegex = /^[\w\.]+@[\w\.]+\.\w{3,}$/;
mail.addEventListener("input", () => {
    if (emailRegex.test(mail.value.trim())) {
        rightemail.style.display = "none";
    }
});
button.addEventListener("click", (e) => {
    e.preventDefault();
    let emailValue = mail.value.trim();
    if (!emailValue) {
        alert("Please enter your email.");
        return;
    }

    if (!emailRegex.test(emailValue)) {
        rightemail.style.display = "block";
        return;
    }
    fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => {
            let user = data.find(u => u.email.toLowerCase() === emailValue.toLowerCase());
            if (user) {
                window.location.href = "code.html";
            } else {
                alert("This email is not registered.");
            }
        })
        .catch(err => {
            console.error("Database error:", err);
            alert("Could not connect to server.");
        });
});