const express = require('express')
const app = express()

const postRouter = require('./routers/postRouter')
const userRouter = require('./routers/userRouter')

app.use('/posts',postRouter)
app.use('/users',userRouter)


module.exports = app;