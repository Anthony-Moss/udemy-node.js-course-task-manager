const express = require('express');
require('./db/mongoose');
const bcrypt = require('bcryptjs');

const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3002

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const myFunction = async () => {
    const password = 'Waffles123!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)
}

myFunction()
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})