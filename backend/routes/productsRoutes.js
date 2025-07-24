const express=require('express');
const multer = require('multer');

const { Products } = require('../models/productModel');

const storage=multer.memoryStorage();
const upload=multer({storage})

const productRoutes=express.Router();


productRoutes.get('/',async(req,res)=>{
    try{
        const products=await Products.find()
        res.status(200).json({message:"data fetched successfully",data:products})
    }catch(err){
        console.log("error",err.message)
        res.status(500).json({message:err.message})
    }
})


productRoutes.post('/add',upload.single('avtar'),async(req,res)=>{
    const {name,contact,email,address,title,website,description}=req.body
    try{
        const checkEmailExist=await Products.findOne({email})
        if(checkEmailExist){
            res.status(200).json({'message':'Email is exist please try with different email!'})
        }

        const avtarBase64=req.file.buffer?.toString('base64')
        if(avtarBase64){
            const addProduct=new Products({name,contact,email,address,title,website,description,avtar:avtarBase64})
            await addProduct.save();
        }else{
            const addProduct=new Products({name,contact,email,address,title,website,description})
            await addProduct.save();
        }
        res.status(201).json({message:'product added successfully',data:addProduct})
    }catch(err){
        console.log("error-",err.message);
        res.status(500).json({message:err.message})
    }
})


module.exports={productRoutes}
