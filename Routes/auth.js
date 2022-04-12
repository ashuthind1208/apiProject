const router = require("express").Router();
const User = require('../Model/userModel');

router.post('/register', async (req,res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      
    });

    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        console.log(err);
    }
});

router.get('/getAllUsers', async (req,res)=>{
   
   try{
        const users = await User.find()
        res.json(users);
   }
   catch(err){
        res.send(err);
   }
});


router.get('/getUsersById/:userId', async (req,res)=>{
   
    try{
         const users = await User.findById(req.params.userId)
         res.json(users);
    }
    catch(err){
         res.send(err);
    }
 });

module.exports=router;