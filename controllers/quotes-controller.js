const quoteDB = require(`../models/quoteDB.js`);

module.exports = {
	index(req, res, next) {
		quoteDB.findAll()
		.then((quotes) => {
			res.locals.quotes = quotes;
			next();
		})
		.catch(err => {
			next(err)
		})
	},

	findOne(req, res, next) {
		quoteDB.findById(req.params.id)
		.then((quote) => {
			res.locals.quote = quote;
			next()
		})
		.catch(err => {
			next(err)
		})
	},

  create(req, res) {
  	  	//console.log(req.params.id)
  		console.log(req.body)
        quoteDB.save(req.body)
      .then(results => {
        res.json({
          message: `ok`,
          data: results
        })
      })
      .catch(err => {
        res.status(500).json({
          message: `500 : ERROR`,
          data: err
        })
      })
  },

  update(req, res) {
  	//console.log(req.body)
  	quoteDB.update(req.body)
  	.then(result => {
  		res.json({
  			message: `ok`,
  			data: result
  		})
  	})
  	.catch(err => {
  		res.status(500).json({
  			message: `ERR 500: FUCKED`,
  			data: err
  		})
  	})
  },

  destroy(req, res) {
  	quoteDB.remove(req.params.id)
  	.then(() => {
  		res.json({
  			message: `Quote with id ${req.params.id} was removed from the database`,
  		})
  	})
  	.catch(err => {
  		res.status(500).json({
  			message: `500 : YOU SUCK`,
  			data: err
  		})
  	})

  }
}