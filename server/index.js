const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config()

const { Schema } = mongoose;

const UserSchema = new Schema({
   imgUrl:{type:String},
   type:{type:String},
   name:{type:String},
   price:{type:Number} 
},
{timestamps:true})

const Products = mongoose.model("products",UserSchema)

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
 res.send("Products")
})

app.get("/products",(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

app.get("/products/:id",(req,res)=>{
    const {id} = req.params
    Products.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:err})
            }
        }
        else{
            res.status(501).json({message:"NOT FOUND"})
        }
    })
})

app.delete("/products/:id",(req,res)=>{
    const {id} = req.params
    Products.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:"NOT FOUND"})
            }
        }
        else{
            res.status(501).json({message:err})
        }
    })
})

app.post("/products",(req,res)=>{
    const product = new Products({
        imgUrl:req.body.imgUrl,
        type:req.body.type,
        name:req.body.name,
        price:req.body.price
    })
    product.save()
    res.json({message:"product created"})
})

const url = process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT = process.env.PORT





mongoose.set('strictQuery', false);
mongoose.connect(url,(err)=>{
    console.log("DB connected");
   app.listen(PORT,()=>{
    console.log("Server started");
   })
})