import express from 'express'
import cors from 'cors'
import db from './dbConnections.js'
import studentsRouts from './Routers/students.js'
import coursesRouts from './Routers/courses.js'
import enrollmentsRouts from './Routers/enrollments.js'
import usersRouts from './Routers/users.js'

const app = express();

app.use (express.json()) // This requied to parse json file
app.use (cors())         // Allow all origins


app.use ('/students', studentsRouts)
app.use ('/courses', coursesRouts)
app.use ('/enrollments', enrollmentsRouts)
app.use ('/users', usersRouts)

app.get ("/", (req,res)=> {
  res.send ("The server is running ")
})

app.listen (4000, ()=>{
  console.log ("Server is listening at port 4000")
})
