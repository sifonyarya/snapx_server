const Router = require('express');
const genderContainer = require('../controllers/gender.controller');
const router = new Router();


router.post('/gender', genderContainer.createGender)
router.get('/gender', genderContainer.getGender)
router.get('/gender/:id', genderContainer.getOneGender)
router.put('/gender/:id', genderContainer.updateGender)
router.delete('/gender/:id', genderContainer.deleteGender)





module.exports = router