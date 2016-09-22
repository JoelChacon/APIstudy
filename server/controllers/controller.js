var KalEl = require('../models/Kal-El_Post');

exports.post = function(req, res) {
 	KalEl.create(req.body, function(error, post) {
 		if(error) {
 			res.status(500).json(error);
 		} else {
 			res.json(post);
 		}
 	})	
}

exports.getAll = function(req, res) {
	KalEl.find(req.query, function(error, posts) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(posts)
		}
	})
}

exports.getOne = function(req, res) {
	KalEl.findById(req.params.id, function(error, post) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(post);
		}
	})
}