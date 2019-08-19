const express = require('express');
require('./db/mongoose');


const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3002

const multer = require('multer');
const upload = multer({
    dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
})

