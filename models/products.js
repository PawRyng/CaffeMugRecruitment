const mongoose = require("mongoose")
const {Schema} = mongoose



const Products = new Schema({
    Name:{type: String, require:true, maxLength:100},
    Price:{type: Number, require:true},
    UpdateDate:{type: Date, require:false, default: Date.now()},
})

module.exports = mongoose.model("productSchema", Products)