const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../../src/models/user');

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'Jotaro',
    email: 'Jojo@goodgrief.com',
    password: 'StarPlat!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const setupDatabase = async () => {
    beforeEach(async () => {
        await User.deleteMany()
        await new User(userOne).save()
    })
}

module.exports = {
    userOne,
    userOneId,
    setupDatabase
}