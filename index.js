import express from 'express'
const app = express();

app.get ('/',(req, res)=> {
  res.send ("Server running")
})

app.listen (5000, ()=> {
  console.log ("Listennig at localhost 5000")
})