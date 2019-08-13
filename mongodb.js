// CRUD create, read, update, delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

    // db.collection('users').find({ age: 26 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5d52ef417a3e68b82b363440")}, (error, task) => {
    //     if (error) {
    //         console.log("Unable to find task!")
    //     }
    //     console.log(task)
    // })

    db.collection('tasks').find({completed: false}).toArray((error, users) => {
        if (error) {
            console.log("Unable to retrieve tasks!")
        }

        console.log(users)
    })
})