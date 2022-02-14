let login = document.querySelector("#buttonLog");
login.addEventListener('click',telaDeLogin);

let cadastro = document.querySelector("#buttonCad");
cadastro.addEventListener('click',telaDeCadastro);

let insta = document.querySelector("#buttonInsta");
insta.addEventListener('click',direcionaInstagram);

let twit = document.querySelector("#buttonTwit");
twit.addEventListener('click',direcionaTwitter);

let tubiu = document.querySelector("#buttonTubiu");
tubiu.addEventListener('click',direcionaYoutube);

function telaDeLogin(){
    /*direcionar pra tela de login*/
}
function telaDeCadastro(){
    /*direcionar pra tela de cadastro*/
}
function direcionaInstagram(){
    window.location.href = "https://www.instagram.com/";
}
function direcionaTwitter(){
    window.location.href = "https://twitter.com/";
}
function direcionaYoutube(){
    window.location.href = "https://www.youtube.com/";
}



/* teste de login com popup
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}
function closeForm() {
    document.getElementById("loginForm").style.display = "none";
}
*/