const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Booklist Server'});
});


app.get('/*', (req, res) => {
	res.status(404).json({message: 'Request path could not be found!'});
});

app.listen(9000, () => console.log(`Booklist Server: listening on port 5000`));