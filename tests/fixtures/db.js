const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');


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

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Jonathan',
    email: 'Jojo@theorigional.com',
    password: 'HamonStrike@',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}



const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Kill Dio',
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Save mother',
    completed: false,
    owner: userTwoId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Kill Dio',
    completed: false,
    owner: userTwoId
}

const taskFour = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Learn to use Hamon',
    completed: true,
    owner: userOneId
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
    await new Task(taskFour).save()
}

module.exports = {
    userOne,
    userOneId,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    taskFour,
    setupDatabase
}