const express = require("express")

const company = require("../models/company.model")

const router = express.Router()

router.get("",async(req,res)=>{
    try{
        const Company = await company.find().lean().exec()

        res.status(201).send(Company)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const Company = await company.findById(req.params.id).lean().exec()

        res.status(201).send(Company)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
router.post("",async(req,res)=>{
    try{
        const Company = await company.create(req.body)

        res.status(201).send(Company)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const Company = await company.findByIdAndUpdate(req.params.id).lean().exec()

        res.status(201).send(Company)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const Company = await company.findByIdAndRemove(req.params.id).lean().exec()

        res.status(201).send(Company)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
module.exports = router