const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    city_name:{type:String, required:true, unique:true}
},{
    versionKey:false,
    timestamps:true
})

const city = mongoose.model("city",citySchema)

module.exports = city