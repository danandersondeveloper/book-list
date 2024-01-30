const express = require('express');
const UserControllers = require('../Controllers/UserController');

const router = express.Router();

// Get the request let the controller handle the functionality

router.get('/', (req, res) => {
	UserControllers.getUsers(req, res)
});

router.post('/', (req, res) => {
	UserControllers.createUser(req, res)
});

router.patch('/', (req, res) => {
	UserControllers.updateUser(req, res)
})

router.delete('/', (req, res) => {
	UserControllers.deleteUser(req, res)
})

module.exports = router;