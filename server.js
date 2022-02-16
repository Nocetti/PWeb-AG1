const express = require("express")
const bodyParser= require('body-parser');
const res = require("express/lib/response")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const alert = require('alert')

const adapter = new FileSync('db.json')
const db = low(adapter)
const app = express();
let atualmenteLogado = new Boolean(false);

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
const defaultData = {
	usuario: [
		{
			id: 0,
			cadastroNome: "admin",
			cadastroEmail: "admin@admin.com",
			cadastroIdade: "18",
			cadastroSenha: "abcd1234"
		},
	],
};

	db.defaults(defaultData).write();

app.get("/usuario", (req, res) => {
    const usuario = db.get("usuario").value();

	res.send(usuario);
});

app.get("/", (req,res) => {
	res.sendFile(__dirname + "/TelaPrincipal/index.html");
});

app.get("/noticia", (req,res) => {
	if (atualmenteLogado == false) {
		alert("Você ainda não está logado");
		res.redirect('http://localhost:3000/');
	} else {
		res.sendFile(__dirname + "/TelaNoticia/index.html");
	}
});

app.get("/cadastro", (req,res) => {
	if (atualmenteLogado == true) {
		alert("Você já está logado");
		res.redirect('http://localhost:3000/');
	} else {
		res.sendFile(__dirname + "/TelaCadastro/cadastro.html");
	}
});

app.get("/login", (req,res) => {
	if (atualmenteLogado == true) {
		alert("Você já está logado");
		res.redirect('http://localhost:3000/');
	} else {
		res.sendFile(__dirname + "/TelaLogin/login.html");
	}
});

app.post("/cadastro", (req, res) => {
	const name = req.body.cadastroNome;
	const email = req.body.cadastroEmail;
	const number = req.body.cadastroIdade;
	const password = req.body.cadastroSenha;

	const lastAuthor = db.get("usuario").takeRight(1).value()[0];
	
	console.log(lastAuthor);

	const nextId = lastAuthor.id + 1;
	
	db.get("usuario").push ({ id: nextId, cadastroNome: name, cadastroEmail: email, cadastroIdade: number, cadastroSenha: password}).write();
	res.redirect('http://localhost:3000/login');
});

app.post("/verificarLogin", (req, res) => {
	if (atualmenteLogado == false) {
		const email = req.body.loginEmail;
		const password = req.body.loginSenha;
		const listaUsuarios = db.get("usuario").value();	
		for (var x in listaUsuarios) {
			if (atualmenteLogado == false) {
				const usuarioAtual = db.get("usuario").value()[x];
				if (email == usuarioAtual['cadastroEmail']) {
					if (password == usuarioAtual['cadastroSenha']){
						console.log ("Login Feito com Sucesso");
						atualmenteLogado = true;
					} else {
						console.log ("Senha Errada");
					}	
				} else {
					console.log ("Usuário não reconhecido");
				}
			}
		
		}
	}
	if (atualmenteLogado == true) {
		alert("Login executado com sucesso");
		res.redirect('http://localhost:3000/');
	} else {
		alert("Email ou Senha incorretos");
		res.redirect('http://localhost:3000/login');
	}
});

app.listen(3000, function () {
	console.log("listening on 3000");
});