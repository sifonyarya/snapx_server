const db = require('../db');


class RealtyGontroller {
    async createRealty(req,res) {
        const {adress, number_realty, status_user, email, name_company, username, phone, online, type_realty, floor, rooms, description, price, status, type} = req.body
        const newRealty = await db.query(`INSERT INTO realty 
        (adress, number_realty, status_user, email, name_company, username, phone, online, type_realty, floor, rooms, description, price, status, type) values 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
        [adress, number_realty, status_user, email, name_company, username, phone, online, type_realty, floor, rooms, description, price, status, type])
        res.json(newRealty.rows[0])
    }
    async getRealty(req, res) {
        const realtys = await db.query (`SELECT * FROM realty`)
        res.json(realtys.rows)
    }
    async getOneRealty(req, res) {
        const id = req.params.id
        const realty = await db.query (`SELECT * FROM realty where id = $1`, [id])
        res.json(realty.rows[0])
    }
    async updateRealty(req,res) {
        const {id, adress, number_realty, status_user, email, name_company, username, phone, online, type_realty, floor, rooms, description, price, status, type} = req.body
        const realty = await db.query (`UPDATE realty set adress = $1, number_realty = $2, status_user = $3, email = $4, name_company = $5, username = $6, phone = $7, online = $8, type_realty = $9, floor = $10, rooms = $11, description = $12, price = $13, status = $14, type = $15 where id = $16 RETURNING *`, 
        [adress, number_realty, status_user, email, name_company, username, phone, online, type_realty, floor, rooms, description, price, status, type, id]
        )
        res.json(realty.rows[0])
    }
    async deleteRealty(req,res) {
        const id = req.params.id
        const realty = await db.query (`DELETE FROM realty where id = $1`, [id])
        res.json(realty.rows[0])
    }
}
module.exports = new RealtyGontroller()