const express = require('express');
const BookControllers = require('../Controllers/BookController');

const router = express.Router();

// Get the request let the controller handle the functionality

router.get('/', (req, res) => {
	BookControllers.getBooks(req, res);
});

router.post('/', (req, res) => {
	BookControllers.createBook(req, res);
});

router.patch('/', (req, res) => {
	BookControllers.updateBook(req, res);
});

router.delete('/', (req, res) => {
	BookControllers.deleteBook(req, res);
});

module.exports = router;