const Comment = require('../models/comment');

const create = async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
        });
        console.log('The new comment', newComment);
        res.status(200).json(newComment.id);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const deleteComment = async (req, res) => {
    try {
        await Comment.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(200);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const update = async (req, res) => {
    try {
        await Comment.update(req.body, {
            where: { id: req.params.id },
        });

        res.sendStatus(200);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const index = async (req, res) => {
    try {
        const allComments = await Comment.findAll();

        res.send(allComments);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const getById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        res.send(comment);
    } catch (e) {
        return res.status(400).json(e);
    }
};

module.exports = {
    create,
    deleteComment,
    update,
    index,
    getById
};
