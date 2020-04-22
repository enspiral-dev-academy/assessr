const router = require('express').Router()
// const verifyJwt = require('express-jwt')

const db = require('../db/assessments')
const { decode } = require('../auth/token')

router.get('/', decode, (req, res) => {
    const {user_name} = req.user
    db.getUserAssessments(user_name)
        .then(arr => res.json(arr))
})


// router.get('/', (req, res) => {
//     let modules = null
//     db.getAllModules()
//         .then(mods => {
//             modules = mods
//             return db.getAllAssessments()
//         })
//         .then(assmts => collate(modules, assmts))
//         .then(result => res.json(result))
//         .catch(err => res.status(500).send({message: "Server Error"}))
// })

// function collate(modules, assessments) {
//     modules = modules.map(mod => ({...mod, assessments:[]}))
//     return assessments.reduce((mods, assmt) => {
//         mods.forEach((mod) => {
//             if(mod.id == assmt.module_id) mod.assessments.push(assmt)
//         })
//         return mods
//     }, modules)
// }

module.exports = router
