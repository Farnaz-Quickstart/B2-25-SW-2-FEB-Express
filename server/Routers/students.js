import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

Router.get ('/', async (req,res)=>{
  try {
    const [result] = await db.query ("SELECT * from students")
    console.log (result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).send("Server error while listing student", err)
  }
})

export default Router;