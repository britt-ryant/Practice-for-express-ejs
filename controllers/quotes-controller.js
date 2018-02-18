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
	}
}