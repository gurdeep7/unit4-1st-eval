const express = require("express")

const skill = require("../models/skill.model")

const router = express.Router()

router.get("",async(req,res)=>{
    try{
        const Skill = await skill.find().lean().exec()

        res.status(201).send(Skill)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.post("",async(req,res)=>{
    try{
        const Skill = await skill.create(req.body)

        res.status(201).send(Skill)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const Skill = await skill.findByIdAndUpdate(req.params.id).lean().exec()

        res.status(201).send(Skill)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const Skill = await skill.findByIdAndRemove(req.params.id).lean().exec()

        res.status(201).send(Skill)
    }catch(e){
        res.status(500).json({status: e.message})
    }
})
module.exports = router