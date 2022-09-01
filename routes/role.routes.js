const Router = require('express');
const roleContainer = require('../controllers/role.controller');
const router = new Router();


router.post('/role', roleContainer.createRole)
router.get('/role', roleContainer.getRoles)
router.get('/role/:id', roleContainer.getOneRole)
router.put('/role', roleContainer.updateRole)
router.delete('/role/:id', roleContainer.deleteRole)





module.exports = router