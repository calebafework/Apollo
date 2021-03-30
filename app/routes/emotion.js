const router = require('express').Router()
const ctrl = require('../controllers/emotion')
//change back to POST later
router.post('/',ctrl.index)

module.exports = router
