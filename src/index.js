const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app =  express()
const port = process.env.PORT || 3000

//middleware
// app.use((req,res,next)=>{
//     console.log();
// })
// app.use((req,res,next)=>{
//     res.status(503).send('The site is currently under maintainance!')

// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+port);
})

// /Users/madan/mongodb/bin/mongod.exe --dbpath=/Users/madan/mongodb-data