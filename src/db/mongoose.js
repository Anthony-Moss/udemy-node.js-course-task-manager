const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Sets model for User 
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

// example of creating instance of User model
// const me = new User({
//     name: 'Anthony',
//     age: 26
// })

// Example of saving instance of User model 
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// Sets model for Task
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// Example of creating instance of Task model
// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })

// Example of saving instance of Task model 
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })