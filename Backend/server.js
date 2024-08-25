// imports
const express = require('express')
const authRoutes = require('./src/routes/authRoutes')
const userRoutes = require('./src/routes/userRoutes')
const cors = require('cors')
const {log} = require('./src/middleware/log')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const { connectDatabase } = require('./config/database.js')

// -----------------------------------------------------------------------------------------------------------------
dotenv.config({path : "./config/config.env"})
const app = express()
const PORT = process.env.PORT || 3000
const corsOption = {
    origin : process.env.CORS_URL || 'http://localhost:5173',
    credentials: true,
};

//Middleware
// -----------------------------------------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(cors(corsOption))
app.use(log)



//Database connection.
//------------------------------------------------------------------------------------------------------------------
connectDatabase();

//Routes
// -----------------------------------------------------------------------------------------------------------------
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res)=> res.sendStatus(200))

app.listen(PORT, ()=> {console.log(`app is listening at port ${PORT}`)})