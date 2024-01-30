const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	user_role: {
		type: String,
		default: 'registered'
	},
	is_active: {
		type: Boolean,
		default: true
	}
});

module.exports = mongoose.model('User', userSchema)