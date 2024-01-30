const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	short_description: {
		type: String
	},
	long_description: {
		type: String
	},
	author: {
		type: String
	},
	price: {
		type: Number
	},
	image: {
		type: String,
	},
	category: {
		type: String
	}
});

exports.module = mongoose.model('Book', bookSchema);