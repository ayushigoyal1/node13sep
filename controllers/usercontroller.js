const users=require('../users.json')
function getAllUser(req,res){
    try{
        res.json(users)
    }catch(err){

    }
}


module.exports={
    getAllUser
}