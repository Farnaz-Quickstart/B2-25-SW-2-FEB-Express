import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.get ('/', async (req,res)=>{
  try {
    console.log ("step 1 ....")
    const [result] = await db.query ("SELECT * from student")
    console.log (result)
    res.status(200).json(result)
  }
  catch (error) {
    console.log (error)
    res.status(500).send("Server error while listing student", error)
  }
})

Router.post ("/", async (req,res)=> {
  try {
    const {student_name,student_email} = req.body
    await db.query ("INSERT INTO students (student_name, student_email) VALUES ( ?, ?)", [student_name, student_email])
    res.status(200).send("Student Add to the DB")
  }
  catch (error) {
    res.status(500).send("Server error while adding student", err)
  }
})

export default Router;