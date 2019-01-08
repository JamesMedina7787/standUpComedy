const express = require('express')
const ejs = require('ejs')
const cookieParser=require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index')
})
app.get("/index", (req, res)=>{
  res.render('index')
})
app.get("/about", (req, res)=>{
  res.render('about')
})

app.get("/gallery", (req, res)=>{
  res.render('gallery')
})

app.listen(PORT || 3000, ()=>{
  console.log("Server started...")
})
