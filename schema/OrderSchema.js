const {Schema} =require("mongoose");

const OrderSchema=new Schema({
     name: String,
    price: Number,
    qty:Number,
    percent: String ,
    isDown: Boolean,
})

module.exports={OrderSchema}