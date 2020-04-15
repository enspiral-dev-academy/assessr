const router = require('express').Router()

const db = require('../db/assessments')

router.get('/', (req, res) => {
    let modules = null
    db.getAllModules()
        .then(mods => {
            modules = mods
            return db.getAllAssessments()
        })
        .then(assmts => collate(modules, assmts))
        .then(result => res.json(result))
        .catch(err => res.status(500).send({message: "Server Error"}))
})

function collate(modules, assessments) {
    modules = modules.map(mod => ({...mod, assessments:[]}))
    return assessments.reduce((mods, assmt) => {
        mods.forEach((mod) => {
            if(mod.id == assmt.module_id) mod.assessments.push(assmt)
        })
        return mods
    }, modules)
}

module.exports = router
