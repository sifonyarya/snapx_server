const Router = require('express');
const realtyContainer = require('../controllers/realty.controller');
const router = new Router();


router.post('/realty', realtyContainer.createRealty)
router.get('/realty', realtyContainer.getRealty)
router.get('/realty/:id', realtyContainer.getOneRealty)
router.put('/realty/:id', realtyContainer.updateRealty)
router.delete('/realty/:id', realtyContainer.deleteRealty)





module.exports = router