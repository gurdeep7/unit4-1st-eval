const express = require("express")

const job = require("../models/job.model")

const company1 = require("../models/company.model")


const router = express.Router()

router.get("",async(req,res)=>{
    try{
        const Job = await job.find().populate("city").populate("skill").populate("company").lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.get("/city/:city_id/skill/:skill_id",async(req,res)=>{
    try{
        const Job = await job.find({city:req.params.city_id, skill:req.params.skill_id}).populate("city").populate("skill").populate("company").lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
router.get("/workfromhome",async(req,res)=>{
    try{
        const Job = await job.find({work_from_home:"YES"}).populate("city").populate("skill").populate("company").lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.get("/twomonthnotice",async(req,res)=>{
    try{
        const Job = await job.find({two_month_notice:"YES"}).populate("city").populate("skill").populate("company").lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.get("/ratinghightolow",async(req,res)=>{
    try{
        const Job = await job.find().sort({rating:-1}).populate("city").populate("skill").populate("company").lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.get("/ratinglowtohigh",async(req,res)=>{
    try{
        const Job = await job.find().sort({rating:1}).populate("city").populate("skill").populate("company").lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.get("/mostjobcompany",async(req,res)=>{
    try{
        var obj = {}
        const Job = await job.find().lean().exec()
        for(let i = 0; i < Job.length; i++){
            if(obj[Job[i].company] == undefined){
                obj[Job[i].company] = 1;
            }else{
                obj[Job[i].company]++;
            }
        }
        let most_accur;
        let freq = 0;
        for(key in obj){
            if(obj[key] > freq){
                freq = obj[key]
                most_accur = key
            }
        }
        const Company1 = await company1.findById(most_accur).lean().exec()
        
        res.status(201).send(Company1)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.post("",async(req,res)=>{
    try{
        const Job = await job.create(req.body)

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const Job = await job.findByIdAndUpdate(req.params.id).lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const Job = await job.findByIdAndRemove(req.params.id).lean().exec()

        res.status(201).send(Job)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
module.exports = router