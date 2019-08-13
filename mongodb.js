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

    // db.collection('users').updateOne({
    //     _id: ObjectID("5d52ec5ad97c42b8020350c5")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})