const express = require('express');
const morgan = require('morgan')

const app = express();

function logger(req, res, next){
	console.log(`Ruta recibida ${req.protocol} ://${req.get('host')}${req.originalUrl}`);
	next();
}
//Settings
app.set('appName', 'Nehuen');
app.set('port', 3000);
app.set('view engine', 'ejs');
//Middlewares
app.use(express.json()); 
app.use(morgan('dev'));


//app.all();

app.get('/', (req, res)=>{
	const data = [{name:'nehuen'},{name:'nehuen2'},{name:'nehuen3'}]
	res.render('index.ejs', {people: data});
})

app.get('/user', (req, res)=>{
	res.json({
		username:'Kvza'
	});
})

app.post('/user/:id', (req, res)=>{
	console.log(req.body);
	console.log(req.params);
	console.log('POST REQUEST RECIVED');
})

app.delete('/user/:id', (req, res)=>{
	console.log('User '+req.params.id+'deleted');
	
})

app.use(express.static('public/'));

app.listen(app.get('port'), () =>{
	console.log('Server Port', app.get('port'));
})