const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// Sets model for User 
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            } 
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            } 
        }
        
    }
})

// example of creating instance of User model
// const me = new User({
//     name: '   Anthony  ',
//     email: 'AnThOnY@me.com',
//     age: 26,
//     password: 'Waffles123!'
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
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

// Example of creating instance of Task model
const task = new Task({
    description: 'Learn the Mongoose library',
})

// Example of saving instance of Task model 
task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})