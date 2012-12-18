
/*
 * GET home page.
 */

exports.index = function(req, res){
	var segundo = req.body.secs;
	var minuto = req.body.mins;
	res.render('index', { title: 'Round Timer', segundo: segundo, minuto: minuto})
};

exports.config = function(req, res){
  res.render('config', { title: 'ooooi' })
};

exports.teste = function(req, res){
  res.render('teste', { title: 'ooooi' })
};