import express from 'express'
import db from '../dbConnections.js'

const Router = express.Router()

console.log ("Router users ....")
Router.post ('/', async (req,res)=>{
  try {
    console.log ("step 1 ....")
    const {user_username, user_password} = req.body
    console.log (user_username, user_password)

    const [result] = await db.query ("SELECT * FROM users WHERE user_name= ? AND user_password=?", [user_username, user_password])
    console.log (result)
    if (result.length == 0)
      res.status(404).json(result)
    else 
      res.status(200).json(result)
  }
  catch (error) {
    console.log (error)
    res.status(500).send("Server error while listing student", error)
  }
})
export default Router;