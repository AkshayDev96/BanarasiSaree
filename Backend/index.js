const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const morgan= require('morgan')
const bodyParser= require('body-parser')
const cookieParser= require('cookie-parser')
const PORT = 5001
require('dotenv').config()

const userRouter = require('./routes/auth')
mongoose.connect(process.env.MongoDb, {useNewUrlParser: true,
    useCreateIndex:true,useFindAndModify:false,useUnifiedTopology: true})
    .catch(()=>console.log("Database error"))

//midlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
    
app.use(cors())
app.use('/api',userRouter)
app.use('/api',require('./routes/imageHandle'))
app.use('/api',require('./routes/category'))
app.use('/api',require('./routes/subcategory'))

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})