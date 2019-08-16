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

    // db.close();

// CREATE EXAMPLES -------------------------------------------------------------------------------------------------
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Jose',
    //     age: 23
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

// READ EXAMPLES -------------------------------------------------------------------------------------------------
    // db.collection('users').find({ age: 26 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5d52ef417a3e68b82b363440")}, (error, task) => {
    //     if (error) {
    //         console.log("Unable to find task!")
    //     }
    //     console.log(task)
    // })


// UPDATE EXAMPLES -------------------------------------------------------------------------------------------------
    // db.collection('users').updateOne({
    //     _id: ObjectID("5d52ec5ad97c42b8020350c5")
    // }, {
    //     $set: {
    //         name: "Philip"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


// DELETE EXAMPLES -------------------------------------------------------------------------------------------------
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).then((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'do laundry'
    // }).then((result) => {
    //     console.log(result)
    // }).then((error)=> {
    //     console.log(error)
    // })
})