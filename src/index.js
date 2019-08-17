const express = require('express');
require('./db/mongoose');


const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3002

app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.status(400).send('Get requests are disabled')
    } else {
        next()
    }
})

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})