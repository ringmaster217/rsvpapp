var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Response = mongoose.model('Response')

router.get("/responses", function(req, res, next){
  Response.find(function(err, responses){
    if(err){ return next(err); }
    res.json({responses: responses});
  })
});

router.post("/responses", function(req, res, next){
  Response.findOne({name: req.body.name}, function(err, response){
    if(err){ return next(err); }
    if(response){
      response.setCount(req.body.count, function(err, response){
        if(err){ return next(err); }
        res.sendStatus(200);
      });
    } else {
      response = new Response(req.body);
      response.save(function(err, response){
        if(err){ return next(err); }
        res.sendStatus(200);
      });
    }
  });
});

module.exports = router;
