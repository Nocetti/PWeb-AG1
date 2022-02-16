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

/*let tela = document.querySelector("#confirmarCadastro > h1");
if (tela = "Cadastre-se"){
    cadastro.style="display: none;"
    login.style="display: block;"
}else if (tela = "Login"){
    login.style="display: none;"
    cadastro.style="display: block;"
}*/

function telaDeLogin(){
    window.location.href = "http://localhost:3000/login";
}
function telaDeCadastro(){
    window.location.href = "http://localhost:3000/cadastro";
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