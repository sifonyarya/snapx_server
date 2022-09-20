const db = require('../db');



class UsersController {
    async createUser(req,res) {
        const {fullname, surname, avatar, email, age, birth, phone, role_id, gender_id, timestamp} = req.body
        const hashedPassword = await bycrypt.hash(req.body.password,10);
        const newUser = await db.query(`INSERT INTO users (fullname, surname, avatar, email, age, birth, phone, role_id, gender_id, password, timestamp) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [fullname, surname, avatar, email, age, birth, phone, role_id, gender_id, hashedPassword, timestamp])
        res.json(newUser.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query (`SELECT * FROM users`)
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query (`SELECT * FROM users where id = $1`, [id])
        res.json(user.rows[0])
    }
    async updateUser(req,res) {
        const {id, fullname, surname, avatar, email, age, birth, phone, role_id, gender_id, password, timestamp} = req.body
        const settings = await db.query (`UPDATE users set id = $1, fullname = $2, surname = $3, avatar = $4, email = $5, age = $6, birth = $7, phone = $8, role_id = $9, gender_id = $10, password = $11, timestamp = $12 RETURNING *`, 
        [id, fullname, surname, avatar, email, age, birth, phone, role_id, gender_id, password, timestamp]
        )
        res.json(settings.rows[0])
    }
    async deleteUser(req,res) {
        const id = req.params.id
        const user = await db.query (`DELETE FROM users where id = $1`, [id])
        res.json(user.rows[0])
    }
}
module.exports = new UsersController()