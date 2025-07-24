const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    website:{type:String},
    title:{type:String,required:true},
    description:{type:String,required:true},
    address:{type:String,required:true},
    avtar:{type:String}
},
{timestamps:true,
versionKey:false
})

const Products= mongoose.model('products',productSchema)

module.exports={Products}