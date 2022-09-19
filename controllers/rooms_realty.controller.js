const db = require('../db');


class Rooms_realtyGontroller {
    async createRooms_realty(req,res) {
        const {name} = req.body
        const newGender = await db.query(`INSERT INTO rooms_realty (name) values ($1) RETURNING *`, [name])
        res.json(newGender.rows[0])
    }
    async getRooms_realty(req, res) {
        const genders = await db.query (`SELECT * FROM rooms_realty`)
        res.json(genders.rows)
    }
    async getOneRooms_realty(req, res) {
        const id = req.params.id
        const gender = await db.query (`SELECT * FROM rooms_realty where id = $1`, [id])
        res.json(gender.rows[0])
    }
    async updateRooms_realty(req,res) {
        const {id, name} = req.body
        const gender = await db.query (`UPDATE rooms_realty set name = $1 where id = $2 RETURNING *`, 
        [name, id]
        )
        res.json(gender.rows[0])
    }
    async deleteRooms_realty(req,res) {
        const id = req.params.id
        const gender = await db.query (`DELETE FROM rooms_realty where id = $1`, [id])
        res.json(gender.rows[0])
    }
}
module.exports = new Rooms_realtyGontroller()