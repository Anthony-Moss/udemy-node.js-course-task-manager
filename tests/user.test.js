const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase)

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
    const response = await request(app)
        .post('/users/login')
        .send(userOne)
        .expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
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

    // Assertion to ensure user is not deleted from db
    const user = await User.findById(userOneId)
    expect(user).not.toBeNull()
})

test('Should delete account for authorized user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    // Assertion to ensure user is deleted from db
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)
    
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Jonathan'
        })
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Jonathan')
})

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Atlanta'
        })
        .expect(400)
})