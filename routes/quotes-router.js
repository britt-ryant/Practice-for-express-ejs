const quotesRouter = require(`express`).Router();
const quotesController = require(`../controllers/quotes-controller.js`)
const viewsController = require(`../controllers/views-controller.js`)


// quotesRouter.get(`/`, (req, res) => {
// 	res.send(`working for quotes page`)
// })
// quotesRouter.post(`/`, (req, res) => {
// 	res.send(`working for quotes page`)
// })
// quotesRouter.get(`/:id`, (req, res) => {
// 	res.send(`working for quotes page and id: ${req.params.id}`)
// })
// quotesRouter.put(`/:id`, (req, res) => {
// 	res.send(`working for quotes page and id: ${req.params.id}`)
// })
// quotesRouter.delete(`/:id`, (req, res) => {
// 	res.send(`working for quotes page and id: ${req.params.id}`)
// })


quotesRouter.get(`/`, quotesController.index, viewsController.showQuotes)
quotesRouter.post(`/`, quotesController.create)
quotesRouter.get(`/:id`, quotesController.findOne, viewsController.showOneQuote)
quotesRouter.put(`/:id`, quotesController.update)
quotesRouter.delete(`/:id`, quotesController.destroy)

module.exports = quotesRouter
