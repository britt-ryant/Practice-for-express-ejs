const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig.js`);

const db = pgp(dbConfig);

module.exports = {
	findAll() {
		return db.any('SELECT * FROM quotes')
	},
}