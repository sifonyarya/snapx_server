const Router = require('express');
const settingsController = require('../controllers/settings.controller');
const router = new Router();

router.get('/settings/:id', settingsController.getOneSettings);
router.put('/settings/:id', settingsController.updateSettings);
router.post('/settings', settingsController.createSettings);

module.exports = router