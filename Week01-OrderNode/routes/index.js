var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Orders = mongoose.model('Orders');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

exports.index = function(req,res){
  res.render('index', {title: 'Express Mongo'});
}

exports.create = function ( req, res ){
  new Orders({
    content    : req.body.content,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
        res.redirect( '/' );
      });
};

module.exports = router;
