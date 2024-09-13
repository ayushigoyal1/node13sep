const express=require('express')
const usercontroller=require('../controllers/usercontroller')
const router=express.Router()

router.get('/users',(req,res)=>{
    usercontroller.getAllUser(req,res)
})

module.exports=router