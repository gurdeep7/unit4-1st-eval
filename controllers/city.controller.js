const express = require("express")

const city = require("../models/city.model")

const router = express.Router()

router.get("",async(req,res)=>{
    try{
        const City = await city.find().lean().exec()

        res.status(201).send(City)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.post("",async(req,res)=>{
    try{
        const City = await city.create(req.body)

        res.status(201).send(City)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const City = await city.findByIdAndUpdate(req.params.id).lean().exec()

        res.status(201).send(City)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const City = await city.findByIdAndRemove(req.params.id).lean().exec()

        res.status(201).send(City)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
module.exports = router