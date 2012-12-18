
/*
 * GET home page.
 */

exports.index = function(req, res){
<<<<<<< HEAD
	var segundo = req.body.secs;
	var minuto = req.body.mins;
	res.render('index', { title: 'Round Timer', segundo: segundo, minuto: minuto})
};

exports.config = function(req, res){
  res.render('config', { title: 'ooooi' })
};

exports.teste = function(req, res){
  res.render('teste', { title: 'ooooi' })
=======
  res.render('index', { title: 'Express' })
>>>>>>> c251a94dd6031a4795c2f49c9b5401214fc0a9b4
};