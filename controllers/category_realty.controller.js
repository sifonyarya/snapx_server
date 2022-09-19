const db = require('../db');


class Category_realtyGontroller {
    async createCategory_realty(req,res) {
        const {name} = req.body
        const newGender = await db.query(`INSERT INTO category_realty (name) values ($1) RETURNING *`, [name])
        res.json(newGender.rows[0])
    }
    async getCategory_realty(req, res) {
        const genders = await db.query (`SELECT * FROM category_realty`)
        res.json(genders.rows)
    }
    async getOneCategory_realty(req, res) {
        const id = req.params.id
        const gender = await db.query (`SELECT * FROM category_realty where id = $1`, [id])
        res.json(gender.rows[0])
    }
    async updateCategory_realty(req,res) {
        const {id, name} = req.body
        const gender = await db.query (`UPDATE category_realty set name = $1 where id = $2 RETURNING *`, 
        [name, id]
        )
        res.json(gender.rows[0])
    }
    async deleteCategory_realty(req,res) {
        const id = req.params.id
        const gender = await db.query (`DELETE FROM category_realty where id = $1`, [id])
        res.json(gender.rows[0])
    }
}
module.exports = new Category_realtyGontroller()