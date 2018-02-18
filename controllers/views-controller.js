module.exports = {
	showQuotes (req, res) {
		res.render(`quotes/index`, {
			quotes: res.locals.quotes
		})
	}, 

	showOneQuote (req, res) {
		res.render(`quotes/show_one`, {
			quotes: res.locals.quote
		})
	}
}