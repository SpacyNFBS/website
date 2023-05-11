const express = require('express')


const app = express()
const port = 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/web/index.html")
})
app.get('/putra', (req, res) => {
  res.sendFile(__dirname + "/web/thalib.html")
})
app.get('/putri', (req,res)=>{
  res.sendFile(__dirname+"/web/thalibah.html")
})
app.get('/putri/competitions', (req, res) => {
  res.sendFile(__dirname + "/web/competitions2.html")
})
app.get('/putra/competitions', (req, res) => {
  res.sendFile(__dirname + "/web/competitions1.html")
})
app.get('/reg', (req, res) => {
  res.sendFile(__dirname + "/web/reg.html")
})
app.get('/svgs/*', (req, res) => {
  res.sendFile(__dirname + req.path)
})
app.get('/font/*', (req, res) => {
  res.sendFile(__dirname + req.path)
})
app.get('/sponsors/*', (req, res) => {
  res.sendFile(__dirname + req.path)
})
app.get('/embed/*', (req, res) => {
  res.sendFile(__dirname + "/web/" + req.path)
})
app.get('/JJc/*', (req, res) => {
  res.sendFile(__dirname+req.path.replace(/%20/g," "))
})
app.get('/JJt/*', (req, res) => {
  res.sendFile(__dirname+req.path.replace(/%20/g," "))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})