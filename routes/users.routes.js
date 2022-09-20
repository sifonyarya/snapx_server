const Router = require('express');
const userContainer = require('../controllers/users.controller');
const router = new Router();


router.post('/users', userContainer.createUser)
router.get('/users', userContainer.getUsers)
router.get('/users/:id', userContainer.getOneUser)
router.put('/users', userContainer.updateUser)
router.delete('/users/:id', userContainer.deleteUser)





module.exports = router