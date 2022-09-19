const Router = require('express');
const property_realtyContainer = require('../controllers/property_realty.controller');
const router = new Router();


router.post('/property_realty', property_realtyContainer.createProperty_realty)
router.get('/property_realty', property_realtyContainer.getProperty_realty)
router.get('/property_realty/:id', property_realtyContainer.getOneProperty_realty)
router.put('/property_realty/:id', property_realtyContainer.updateProperty_realty)
router.delete('/property_realty/:id', property_realtyContainer.deleteProperty_realty)





module.exports = router