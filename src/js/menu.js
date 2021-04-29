let hum = document.querySelector('.hum')
let menu = document.querySelector('.menu')
let show  = document.querySelector('.header___menu')
let close = document.querySelector('.close')

hum.addEventListener('click', toggleMenu)

function toggleMenu(){
    if (menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu")
        close.style.display = "none"
        show.style.display = "block"
    }

    else{
        menu.classList.add("showMenu")
        close.style.display = "block"
        show.style.display = "none"
    }
}