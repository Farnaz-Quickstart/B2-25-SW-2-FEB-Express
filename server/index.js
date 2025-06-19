import express from 'express'
import cors from 'cors'
import db from './dbConnections.js'
import studentsRouts from './Routers/students.js'
import coursesRouts from './Routers/courses.js'
import enrollmentsRouts from './Routers/enrollments.js'

const app = express();


app.use (cors())  // Allow all origins


app.use ('/students', studentsRouts)
app.use ('/courses', coursesRouts)
app.use ('/enrollments', enrollmentsRouts)


app.get ("/", (req,res)=> {
  res.send ("The server is ruuning ")
})

app.listen (4000, ()=>{
  console.log ("Server is listening at port 4000")
})
