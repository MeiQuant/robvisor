/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var index = function(req, res, next){

  res.send('hello robvisor');
};


module.exports = {
  index: index
};

