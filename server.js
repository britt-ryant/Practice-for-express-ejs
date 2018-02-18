//setting up express and the server

const express = require(`express`);
const logger = require(`morgan`);
const bodyParser = require(`body-parser`);
const quotesRouter = require(`./routes/quotes-router.js`);
const PORT = process.env.PORT || 3000;

const app = express();


app.use(logger(`dev`));

app.use(`/quotes`, quotesRouter)

app.get(`/`, (req, res) => {
	res.send(`This is my homepage and its working!`)
});

app.use(`*`, (req, res) => {
	res.status(404).send(`404: NOT FOUND! ⛔️⛔️⛔️⛔️⛔️`)
});


app.listen(PORT, () => {
	console.log(`listening on port 🐭 ${PORT}`);
	console.log(`Listneing in environment 🌴 ${process.env.NODE_ENV || 'development'}`);
});


