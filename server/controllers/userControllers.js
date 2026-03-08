const User=require('../models/userSchema.js');

const bcrypt=require('bcrypt');
const crypto=require('crypto');



 const login=async(req,res)=>{
    const{username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:"Username and password are required"});
    }
    try{
        const user=await User.findOne({username});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const comparePass=await bcrypt.compare(password,user.password);
        if(comparePass){
            const token=crypto.randomBytes(16).toString('hex');
            user.token=token;
            await user.save();
            res.status(200).json({message:"Login successful",token:token});
        }

    }catch(error){
        res.status(500).json({message:`Error occurred while logging in: ${error.message}`});
    }
 }

const register=async(req,res)=>{
    const{name,username,password}=req.body;
    try{
      const existingUser=await User.findOne({username});
      if(existingUser){
        return res.status(409).json({message:"Username already exists"});
      }
      const hashedPassword=await bcrypt.hash(password,10);
       const newUser=new User({
        name:name,
        username:username,
        password:hashedPassword,
       });
       await newUser.save();
       res.status(201).json({message:"User registered successfully"});

    }catch(error){
      res.status(500).json({message:`Error registering user: ${error.message}`});
    }
}

module.exports={login,register};