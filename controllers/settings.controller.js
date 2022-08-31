const db = require('../db');



class SettingsController {
    async createSettings(req,res) {
        const {site_name} = req.body
        const newSettings = await db.query(`INSERT INTO settings (site_name) values ($1) RETURNING *`,
        [site_name])
        res.json(newSettings.rows[0])
    }
    async getSettings(req, res) {
        const settings = await db.query (`SELECT * FROM settings`)
        res.json(settings.rows)
    }
    async getOneSettings(req, res) {
        const id = req.params.id
        const setting = await db.query (`SELECT * FROM settings where id = $1`, [id])
        res.json(setting.rows[0])
    }
    async updateSettings(req,res) {
        const {id, site_name} = req.body
        const settings = await db.query (`UPDATE settings set site_name = $1 RETURNING *`, 
        [site_name]
        )
        res.json(settings.rows[0])
    }
}
module.exports = new SettingsController()