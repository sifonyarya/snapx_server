const Router = require('express');
const category_realtyContainer = require('../controllers/caategory_realty.controller');
const router = new Router();


router.post('/category_realty', category_realtyContainer.createCategory_realty)
router.get('/category_realty', category_realtyContainer.getCategory_realty)
router.get('/category_realty/:id', category_realtyContainer.getOneCategory_realty)
router.put('/category_realty/:id', category_realtyContainer.updateCategory_realty)
router.delete('/category_realty/:id', category_realtyContainer.deleteCategory_realty)





module.exports = router