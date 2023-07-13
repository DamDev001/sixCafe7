const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");

toggle.addEventListener("click", () =>{
    document.querySelector(".navbar-container").classList.add("activeNav")
})

close.addEventListener("click", () =>{
    document.querySelector(".navbar-container").classList.remove("activeNav")
})


//  MENU
const menuLinks = document.getElementsByClassName("menu-link")
const menucContent = document.getElementsByClassName("menu-content")

function openMenu(menuOpen){
    for (const links of menuLinks) {
        links.classList.remove("active-list")
    }
    for(const content of menucContent){
        content.classList.remove("active-menu")
    }

    event.currentTarget.classList.add("active-list")
    document.getElementById(menuOpen).classList.add("active-menu")
}


