const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/',(req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})
app.get('/merch', (req, res) => {
	res.sendFile(__dirname + '/public/merch.html');
})
app.get('/media', (req, res) => {
	res.sendFile(__dirname + '/public/media.html');
})
let port = process.env.PORT;
if (port == null || port == ""){
	port = 3000;
}
app.listen(port);
