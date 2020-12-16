require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const ctrl = require('./controllers')

const port = process.envPORT || 4000
const app = express()

app.use(express.json())

const corsOptions = {
    // from which URLs do we want to accept requests
    origin: ['http://localhost:3000'],
    credentials: true, // allow the session cookie to be sent to and from the client
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))
app.use('/api/v1/emotion',routes.emotion)
app.use('/api/v1/comments',routes.comment)
// console.log(ctrl)
// // hello world
// app.use((req,res, next)=> {
//     res.send("Hello world")
// })

//connection 
app.listen(port, () => console.log(`Server running on port ${port}`))