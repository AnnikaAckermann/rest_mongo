const express = require('express');
const router = express.Router();
const Lizard = require('../models/lizard');

// get a list of lizards
router.get('/lizards', function(req, res, next){
    Lizard.find({}).then(function(lizard){
        res.send(lizard)
    });
});

// add a new lizard to the database
router.post('/lizards', function(req, res, next){
    Lizard.create(req.body).then(function(lizard){
        res.send(lizard);
    }).catch(next);
});

// update a lizard in the database
router.put('/lizards/:id', function(req, res, next){
    Lizard.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Lizard.findOne({_id: req.params.id}).then(function(lizard){
            res.send(lizard);
        });
    });
});

// delete a lizard from the database
router.delete('/lizards/:id', function(req, res, next){
    //console.log(req.params.id);
    Lizard.findByIdAndRemove({_id : req.params.id}).then(function(lizard){
        res.send(lizard);
    });
});

module.exports = router;