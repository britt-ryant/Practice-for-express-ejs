//setting up express and the server

const express = require(`express`);
const logger = require(`morgan`);
const bodyParser = require(`body-parser`);
const quotesRouter = require(`./routes/quotes-router.js`);
const PORT = process.env.PORT || 3000;

const app = express();
app.set(`view engine`, `ejs`);

app.use(logger(`dev`));
app.use(express.static(`public`));
app.use(bodyParser.json());

app.use(`/quotes`, quotesRouter);

app.get(`/`, (req, res) => {
	res.render(`index`, {
		title: `This is the homepage to all of the quotes`,
		heading: `welcome to my quotes app`,
		subheading: `its an app about quotes`,
		showAuthors: true,
		authors: [`CS Lewis`, `Yoda`, `Ryanß`]
	})
});

app.use(`*`, (req, res) => {
	res.status(404).send(`404: NOT FOUND! ⛔️⛔️⛔️⛔️⛔️`)
});


app.listen(PORT, () => {
	console.log(`listening on port 🐭 ${PORT}`);
	console.log(`Listneing in environment 🌴 ${process.env.NODE_ENV || 'development'}`);
});


