const db = require('../db');


class RoleController {
    async createRole(req,res) {
        const {name} = req.body
        const newRole = await db.query(`INSERT INTO role (name) values ($1) RETURNING *`, [name])
        res.json(newRole.rows[0])
    }
    async getRoles(req, res) {
        const roles = await db.query (`SELECT * FROM role`)
        res.json(roles.rows)
    }
    async getOneRole(req, res) {
        const id = req.params.id
        const role = await db.query (`SELECT * FROM role where id = $1`, [id])
        res.json(role.rows[0])
    }
    async updateRole(req,res) {
        const {id, name} = req.body
        const role = await db.query (`UPDATE role set name = $1 where id = $2 RETURNING *`, 
        [name, id]
        )
        res.json(role.rows[0])
    }
    async deleteRole(req,res) {
        const id = req.params.id
        const role = await db.query (`DELETE FROM role where id = $1`, [id])
        res.json(role.rows[0])
    }
}
module.exports = new RoleController()