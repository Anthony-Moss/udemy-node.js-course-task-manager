// CRUD create, read, update, delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Anthony',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'do laundry',
            completed: false
        },
        {
            description: 'go to store',
            completed: false
        },
        {
            description: 'walk the dogs',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })
})