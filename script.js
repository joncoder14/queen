const navLinks = document.getElementById("navLinks");
const hamburguer = document.getElementById("hamburguer");

hamburguer.addEventListener("click", ()=> {
        if(navLinks.style.display === "flex") {
            navLinks.style.display = "none"
        }
        else{
            navLinks.style.display = "flex"
        }
    }
)