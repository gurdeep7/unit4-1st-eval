const express = require("express")

const app = express()

app.use(express.json())

const companyController = require("./controllers/company.controller")

const cityController = require("./controllers/city.controller")

const skillController = require("./controllers/skill.controller")

const jobController = require("./controllers/job.controller")

app.use("/company",companyController)

app.use("/city", cityController)

app.use("/skill",skillController)

app.use("/job", jobController)

module.exports = app;