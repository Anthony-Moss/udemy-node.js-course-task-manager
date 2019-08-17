const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        if (token) {

        } else {
            res.status(401)
        }
    } catch (e) {
        res.status(401).send({error: 'Please authenticate'})
    }
}

module.exports = auth