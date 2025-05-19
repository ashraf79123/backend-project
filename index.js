require('dotenv').config();
const express=require("express");
const { default: mongoose } = require('mongoose');

const mongose=require("mongoose")
const { HoldingModel}=require("./model/HoldingModel");
const { OrderModel } = require('./model/Ordermodel');
const { PositionModel } =require("./model/Positionmodel")

const bodyParser=require('body-parser');
const cors=require("cors")
const app=express();

app.use(cors());
app.use(bodyParser.json())

app.get("/allHolding",async(req,res)=>{
  let allHolding=await HoldingModel.find({});
  res.json(allHolding)
})
app.get("/allposition",async(req,res)=>{
  let allPosition=await PositionModel.find({});
  res.json(allPosition)
})
app.get("/existorder",async(req,res)=>{
  let allOrder=await OrderModel.find({});
  res.json(allOrder)
})

app.post("/newOrder",async(req,res)=>{
  let newOrder= OrderModel({
    name: req.body.name,
    qty:req.body.qty,
    price: req.body.price,
    percent: req.body.percent ,
    isDown: req.body.isDown,
  });

   newOrder.save();

  res.send("order saved")
})


// app.get("/allHolding",async(req,res)=>{
//   let allHolding=await HoldingModel.find({});
//   res.json(allHolding)
// })


const PORT=process.env.PORT || 3002
const uri=process.env.MONGO_URL ;

app.listen(PORT,()=>{
  console.log("app is listening");
  mongoose.connect(uri);
  console.log("db is connected")
})