const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    job_title:{type:String, required:true, unique:true},
    rating:{type:Number, required:true},
    work_from_home:{type:String, required:false, default:"NO"},
    two_month_notice:{type:String, required:false, default:"NO"},
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required:true
    },
    city:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "city",
        required:true 
    },
    skill:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skill",
        required:true 
    }

},{
    versionKey:false,
    timestamps:true
})

const job = mongoose.model("job",jobSchema)

module.exports = job