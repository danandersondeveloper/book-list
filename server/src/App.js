const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();


// Middlewares used on the server

app.use(morgan('common'));		// Used for server loggin
app.use(helmet());				// Used for basic server security


// Configured requests used on the server

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Booklist Server'});
});

app.get('/*', (req, res) => {
	res.status(404).json({message: 'Request path could not be found!'});
});

app.listen(process.env.PORT, () => console.log(`Booklist Server: listening on port ${process.env.PORT}`));