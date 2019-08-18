const express = require('express');
require('./db/mongoose');


const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3002

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.status(400).send('Get requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     if (req.method) {
//         res.status(503).send('Site is under maintenance please try back later')
//     }
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})

const Task = require('./models/task');
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5d59d183b074be1be3c054a2')
    // await  task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5d59bd7939874b1bb633ddec')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()