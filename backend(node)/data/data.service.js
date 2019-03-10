const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers_data/db');
const School = db.data;

module.exports = {
    authenticate,
    message
};
