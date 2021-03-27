const db = require('../models');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const index = (req, res) => {
    //post request to send data to this

    const toneAnalyzer = new ToneAnalyzerV3({
        version: '2017-09-21',
        authenticator: new IamAuthenticator({
            apikey: 'UIJg6GeBYMDcX9vUo5V9Aqn1gXwb2dmlcg8aR1hUUAsI',
        }),
        serviceUrl:
            'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/bf64a6b9-759b-4ebf-b9d9-a445d065e567',
    });

    // const text = 'Team, I know that times are tough! Product '
    // + 'sales have been disappointing for the past three '
    // + 'quarters. We have a competitive product, but we '
    // + 'need to do a better job of selling it!';

    const toneParams = {
        toneInput: { text: req.body.text },
        contentType: 'application/json',
    };

    toneAnalyzer
        .tone(toneParams)
        .then(toneAnalysis => {
            // console.log(JSON.stringify(toneAnalysis, null, 2));
            // console.log(toneAnalysis);
            if (toneAnalysis.result) {
                console.log(toneAnalysis.result.document_tone.tones[0]);
                return res.send({
                    tone: toneAnalysis.result.document_tone.tones[0].tone_id,
                });
            }

            res.send(null);
        })
        .catch(err => {
            console.log('error:', err);
            res.json(err);
        });
};

module.exports = {
    index,
};
