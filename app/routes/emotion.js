const router = require('express').Router()
const ctrl = require('../controllers')
//change back to POST later
router.post('/',ctrl.emotion.index)

module.exports = router
