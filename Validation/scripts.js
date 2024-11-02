let login = document.getElementById("login");
let loginInput = login.querySelector("input");
let loginSpan = login.querySelector("span");
loginInput.addEventListener("input", (ev) =>{
    if(ev.target.value.length < 8){
        loginSpan.style.color = "red";
        loginSpan.innerText = "Слишком коротко";
        return;
    }
    for(let i = 0; i < ev.target.value.length; i++){
        if(!((65 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 90) || (97 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 122) || ev.target.value.charCodeAt(i) == 46 || ev.target.value.charCodeAt(i) == 95)){
            loginSpan.style.color = "red";
            loginSpan.innerText = "Несоответствующие символы. Логин может содержать только буквы, _ и .";
            return;
        }
    }
    loginSpan.style.color = "green";
    loginSpan.innerText = "Хорошо";
})
let pass = document.getElementById("pass");
let passInput = pass.querySelector("input");
let passSpan = pass.querySelector("span");
passInput.addEventListener("input", (ev) =>{
    if(ev.target.value.length < 8){
        passSpan.style.color = "red";
        passSpan.innerText = "Слишком коротко";
        return;
    }
    if(!(65 <= ev.target.value.charCodeAt(0) && ev.target.value.charCodeAt(0) <= 90)){
        passSpan.style.color = "red";
        passSpan.innerText = "Первый символ обязан быть заглавной буквой";
        return;
    }
    let containsSymbol = false;
    let containsNumber = false;
    for(let i = 0; i < ev.target.value.length; i++){
        if(!((48 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 57) || (65 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 90) || (97 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 122) || ev.target.value.charCodeAt(i) == 46 || ev.target.value.charCodeAt(i) == 95)){
            passSpan.style.color = "red";
            passSpan.innerText = "Несоответствующие символы. Пароль может содержать только буквы цифры _ и .";
            return;
        }
        if(48 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 57){
            containsNumber = true;
        }
        if((65 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 90) || (97 <= ev.target.value.charCodeAt(i) && ev.target.value.charCodeAt(i) <= 122)){
            containsSymbol = true;
        }
    }
    if(!(containsNumber && containsSymbol)){
        passSpan.style.color = "red";
        passSpan.innerText = "Пароль должен содержать как цифры так и символы";
        return;
    }
    console.log(ev.target.value)
    if(!(ev.target.value.includes("_") || ev.target.value.includes("."))){
        passSpan.style.color = "red";
        passSpan.innerText = "Нехватает специальных символов ( _ или . )";
        return;
    }
    for(let i = 0; i < ev.target.value.length; i++){
        
    }
    passSpan.style.color = "green";
    passSpan.innerText = "Хорошо";
})