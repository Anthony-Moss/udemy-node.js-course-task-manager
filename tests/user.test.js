const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
    name: 'Jotaro',
    email: 'Jojo@goodgrief.com',
    password: 'StarPlat!'
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