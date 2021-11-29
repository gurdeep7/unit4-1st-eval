const mongoose = require("mongoose")

const companySchema = new mongoose.Schema({
    company_name:{type:String, required:true, unique:true}
},{
    versionKey:false,
    timestamps:true
})

const company = mongoose.model("company",companySchema)

module.exports = company