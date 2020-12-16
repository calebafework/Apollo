const db = require('../models')

const create = (req, res) => {
    db.comment.create({
        content: req.body.content
    })
    .then(newComment => {
        console.log("The new comment", newComment)
        res.json(newComment)
    })
}

const deleteComment = (req, res) => {
    db.comment.destroy({
        where: {id: req.params.id }
    }).then(()=>res.sendStatus(200))
}

const update = (req, res) => {
    db.comment.update(
        req.body,
        {
        where: {id: req.params.id }
    }).then(()=> res.sendStatus(200))
}

const index = (req, res) => {
    db.comment.findAll()
    .then((foundComment)=>{
        res.json(foundComment)
    })
}

module.exports ={
    create,
    deleteComment,
    update,
    index
}