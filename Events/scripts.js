let menu = document.getElementById("Menu")
let header = menu.getElementsByTagName("h1")[0]
menu.addEventListener('click', (ev) => {
    if (ev.target === header){
        let ul = ev.target.parentElement.getElementsByTagName("ul")[0]
        if(ul.classList != undefined && ul.classList.contains("hidden")){
            ul.classList.remove("hidden")
        }
        else{
            ul.classList.add("hidden")
        }
    }
});
