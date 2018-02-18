const quoteDB = require(`../models/quoteDB.js`);

module.exports = {
	index(req, res) {
		quoteDB.findAll()
		.then(results => {
			res.json({
				message:`ok`,
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

	findOne(req, res) {
		quoteDB.findById(req.params.id)
		.then(result => {
			res.json({
				message: `ok`,
				data: result
			})
		})
		.catch(err => {
			res.status(500).json({
				message: `500 FUCKED UP`,
				data: err
			})
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