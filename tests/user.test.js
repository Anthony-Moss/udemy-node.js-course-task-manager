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
    const response = await request(app).post('/users')
        .send({
            name: 'Anthony',
            email: 'Anthony@example.com',
            password: 'MyPass123!'
        }).expect(201)

        // Assert that the database was changed correctly
        const user = await User.findById(response.body.user._id)
        expect(user).not.toBeNull()

        // Assertions about the response
        expect(response.body).toMatchObject({
            user: {
                name: 'Anthony',
                email: 'anthony@example.com'
            },
            token: user.tokens[0].token
        })
        expect(user.password).not.toBe('MyPass123!')
})

test('Should login existing user', async () => {
    await request(app)
    .post('/users/login')
    .send(userOne)
    .expect(200)
})

test('Should fail logging in user with wrong credentials', async () => {
    await request(app)
        .post('/users/login')
        .send({
            name: "Jotaro",
            email: 'Jojo@goodgreif.com',
            password: 'HamonBlast1!'
        })
        .expect(400)
})

test('Should get profile for user', async  () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})


test('Should not delete account for unauthorized user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should delete account for authorized user', async () => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})