const mongoose = require("mongoose")

const skillSchema = new mongoose.Schema({
    skill_name:{type:String, required:true, unique:true}
},{
    versionKey:false
})

const skill = mongoose.model("skill",skillSchema)

module.exports = skill