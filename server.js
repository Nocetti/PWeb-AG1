const express = require("express")
const bodyParser= require('body-parser');
const res = require("express/lib/response")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
const app = express();
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
	res.sendFile(__dirname + "/cadastro.html");
});

app.get("/login", (req,res) => {
	res.sendFile(__dirname + "/login.html");
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

	const name = req.body.loginNome;
	const password = req.body.loginSenha;
	//console.log (usuer);
	const teste = db.get("usuario").value();
	var conseguiuLogar = new Boolean(false);	
	for (var x in teste) {
		if (conseguiuLogar == false) {
			const usuer = db.get("usuario").value()[x];
			if (name == usuer['cadastroNome']) {
				if (password == usuer['cadastroSenha']){
					console.log ("Login Feito com Sucesso");
					conseguiuLogar = true;
				} else {
					console.log ("Senha Errada");
				}	
			} else {
				console.log ("Usuário não reconhecido");
			}
		}
	
	}
	if(conseguiuLogar == true) {
		res.redirect('http://localhost:3000/');
	} else {
		res.redirect('http://localhost:3000/login');
	}
});

app.listen(3000, function () {
	console.log("listening on 3000");
});