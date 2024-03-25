const express = require('express')
const userRoutes = require('./routes/userRoutes')
const logMiddleware = require('./middleware/log')

const app = express()
const port = process.env.port || 3000

//middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(logMiddleware)

//Routes
app.use("/user", userRoutes)

app.get('/', (req, res)=> res.sendStatus(200))


app.listen(port , ()=> {console.log(`app is listening at port ${port}`)})