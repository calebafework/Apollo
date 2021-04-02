const Comment = require('../models/comment');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const create = async (req, res) => {
    try {
        const toneAnalyzer = new ToneAnalyzerV3({
            version: '2017-09-21',
            authenticator: new IamAuthenticator({
                apikey: process.env.TONE_API_KEY,
            }),
            serviceUrl:
                'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/bf64a6b9-759b-4ebf-b9d9-a445d065e567',
        });

        const toneParams = {
            toneInput: { text: req.body.content },
            contentType: 'application/json',
        };

        const toneAnalysis = await toneAnalyzer.tone(toneParams);
        if (toneAnalysis.result) {
            console.log(req.body);
            const newComment = await Comment.create({
                content: req.body.content,
                tone: toneAnalysis.result.document_tone.tones[0].tone_id,
            });

            console.log('The new comment', newComment.id);
            return res.status(201).send(newComment)
        }

        return res.status(400).send('no tone found, try again');
    } catch (e) {
        console.error(e);
        return res.status(400).send(e);
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
        const comment = await Comment.findByPk(req.params.id);
        console.log(comment.dataValues);
        res.status(200).json(comment.dataValues);
    } catch (e) {
        console.error(e);
        return res.status(400).json(e);
    }
};

module.exports = {
    create,
    deleteComment,
    update,
    index,
    getById,
};
