const router = require('express').Router()
const ctrl = require('../controllers/comment')

//who can delete post?
// Eventually create a user model to use the user id to verify they are the creator of a post. Only
// the user who created said post cant delete it.
router.post('/',ctrl.create)
router.delete('/',ctrl.deleteComment)
router.put('/', ctrl.update)
router.get('/', ctrl.index)
router.get('/:id', ctrl.getById)


module.exports = router