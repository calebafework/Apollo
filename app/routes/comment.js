const router = require('express').Router()
const ctrl = require('../controllers')

//who can delete post?
// Eventually create a user model to use the user id to verify they are the creator of a post. Only 
// the user who created said post cant delete it.
router.post('/',ctrl.comment.create)
router.delete('/',ctrl.comment.deleteComment)
router.put('/', ctrl.comment.update)
router.get('/', ctrl.comment.index)

module.exports = router