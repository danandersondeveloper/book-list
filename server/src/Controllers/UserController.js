const express = require('express');


// @desc Get all users
// @route GET /users
// @access Private

const getUsers = async (req, res) => {
	res.status(200).json({ message: 'Made a request to find users' });
}


// @desc Create new user
// @route POST /users
// @access Private

const createUser = async (req, res) => {
	res.status(200).json({ message: 'Made a request to create a new user' })
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