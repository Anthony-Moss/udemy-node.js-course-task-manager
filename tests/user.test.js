const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/user');

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

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Anthony',
        email: 'Anthony@me.com',
        password: 'MyPass123!'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send(userOne).expect(200)
})

test('Should fail logging in user with wrong credentials', async () => {
    await request(app).post('/users/login').send({
        name: "Jotaro",
        email: 'Jojo@goodgreif.com',
        password: 'HamonBlast1!'
    }).expect(400)
})