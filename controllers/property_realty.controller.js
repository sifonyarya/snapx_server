const db = require('../db');


class Property_realtyGontroller {
    async createProperty_realty(req,res) {
        const {name} = req.body
        const newGender = await db.query(`INSERT INTO property_realty (name) values ($1) RETURNING *`, [name])
        res.json(newGender.rows[0])
    }
    async getProperty_realty(req, res) {
        const genders = await db.query (`SELECT * FROM property_realty`)
        res.json(genders.rows)
    }
    async getOneProperty_realty(req, res) {
        const id = req.params.id
        const gender = await db.query (`SELECT * FROM property_realty where id = $1`, [id])
        res.json(gender.rows[0])
    }
    async updateProperty_realty(req,res) {
        const {id, name} = req.body
        const gender = await db.query (`UPDATE property_realty set name = $1 where id = $2 RETURNING *`, 
        [name, id]
        )
        res.json(gender.rows[0])
    }
    async deleteProperty_realty(req,res) {
        const id = req.params.id
        const gender = await db.query (`DELETE FROM property_realty where id = $1`, [id])
        res.json(gender.rows[0])
    }
}
module.exports = new Property_realtyGontroller()