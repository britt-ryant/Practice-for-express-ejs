const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig.js`);

const db = pgp(dbConfig);

module.exports = {
	findAll() {
		return db.any('SELECT * FROM quotes')
	},

	findById(id){
		return db.one('SELECT * FROM quotes WHERE id=$1', id);
	},

	save(quote) {
		return db.one('INSERT INTO quotes(content, author, genre_type) VALUES($[content], $[author], $[genre_type]) RETURNING content, author, genre_type', quote)
	},

	update(quote) {
		return db.one('UPDATE quotes SET content=$[content], author=$[author], genre_type=$[genre_type] WHERE id=$[id] RETURNING id, content, author, genre_type', quote)
	},

	remove(id) {
		return db.none('DELETE FROM quotes WHERE id=$1', id)
	}

}