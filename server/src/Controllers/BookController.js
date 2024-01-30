const express = require('express');
const Book = require('../Models/BookModel');


// @desc Get all users
// @route GET /users
// @access Private

const getBooks = async (req, res) => {
	try {

		return res.status(200).json({message: 'Request for all books made'});

	} catch(err) {
		console.log(err);
		return res.status(500).json({ message: '500 Internal Server Error' })
	}
};


// @desc Get all users
// @route GET /users
// @access Private

const createBook = async (req, res) => {
	try {

		return res.status(200).json({message: 'Request to create a book made'});

	} catch(err) {
		console.log(err);
		return res.status(500).json({ message: '500 Internal Server Error' })
	}
};


// @desc Get all users
// @route GET /users
// @access Private

const updateBook = async (req, res) => {
	try {

		return res.status(200).json({message: 'Request to update a book made'});

	} catch(err) {
		console.log(err);
		return res.status(500).json({ message: '500 Internal Server Error' })
	}
}


// @desc Get all users
// @route GET /users
// @access Private

const deleteBook = async (req, res) => {
	try {

		return res.status(200).json({message: 'Request to delete a book made'});

	} catch(err) {
		console.log(err);
		return res.status(500).json({ message: '500 Internal Server Error' })
	}
}

module.exports = { getBooks, createBook, updateBook, deleteBook }