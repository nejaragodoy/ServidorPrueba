const express = require('express');
const app = express();

app.use(express.json());

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

app.listen(3000, () =>{
	console.log('Server Port 3001');
})