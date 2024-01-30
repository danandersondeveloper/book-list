const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Models/UserModel');


// @desc Get all users
// @route GET /users
// @access Private

const getUsers = async (req, res) => {
	try {
		const users = await User.find().select('-password');

		if (users.length <= 0) return res.status(502).json({ message: '502 Bad Gateway: No data found!'});
		return res.json(users);

	} catch(err) {
		console.log(err);
		return res.status(500).json({ message: '500 Internal Server Error' });
	}
}


// @desc Create new user
// @route POST /users
// @access Private

const createUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) return res.status(400).json({ message: 'All fields are required!' });
		if (await User.findOne({ email }).lean().exec()) return res.status(409).json({ message: 'User all ready exists'});

		const saltRounds = 10;
		const encryptedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = {
			'email': email,
			'password': encryptedPassword	
		}

		await User.create(newUser);
		return res.status(200).json({ message: `New user created!`});
		
	} catch(err) {
		console.log(err);
		return res.status(500).json({ message: '500 Internal Error' });
	}
}


// @desc Update a user
// @route PATCH /users
// @access Private

const updateUser = async (req, res) => {
	res.status(200).json({ message: 'Made a request to update a user' })
}


// @desc Delete user
// @route DELETE /users
// @access Private

const deleteUser = async (req, res) => {
	res.status(200).json({ message: 'Made a request to delete a user' });
}

module.exports = { getUsers, createUser, updateUser, deleteUser }