const db = require('../db');


class GenderGontroller {
    async createGender(req,res) {
        const {name} = req.body
        const newGender = await db.query(`INSERT INTO gender (name) values ($1) RETURNING *`, [name])
        res.json(newGender.rows[0])
    }
    async getGender(req, res) {
        const genders = await db.query (`SELECT * FROM gender`)
        res.json(genders.rows)
    }
    async getOneGender(req, res) {
        const id = req.params.id
        const gender = await db.query (`SELECT * FROM gender where id = $1`, [id])
        res.json(gender.rows[0])
    }
    async updateGender(req,res) {
        const {id, name} = req.body
        const gender = await db.query (`UPDATE gender set name = $1 where id = $2 RETURNING *`, 
        [name, id]
        )
        res.json(gender.rows[0])
    }
    async deleteGender(req,res) {
        const id = req.params.id
        const gender = await db.query (`DELETE FROM gender where id = $1`, [id])
        res.json(gender.rows[0])
    }
}
module.exports = new GenderGontroller()