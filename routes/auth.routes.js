const Router = require('express');
const AuthController = require('../controllers/auth.controller');
const router = new Router();

router.post('/login', AuthController.AuthUser)
router.post('/register', AuthController.AuthRegister)
router.post('/logout', AuthController.AuthLogout)
router.get('/activate/:link', AuthController.AuthActivate)
router.get('/refresh', AuthController.AuthRefresh)
router.get('/users', AuthController.AuthUsers)

module.exports = router;