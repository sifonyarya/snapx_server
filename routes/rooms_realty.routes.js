const Router = require('express');
const rooms_realtyContainer = require('../controllers/rooms.controller');
const router = new Router();


router.post('/rooms_realty', rooms_realtyContainer.createRooms_realty)
router.get('/rooms_realty', rooms_realtyContainer.getRooms_realty)
router.get('/rooms_realty/:id', rooms_realtyContainer.getOneRooms_realty)
router.put('/rooms_realty/:id', rooms_realtyContainer.updateRooms_realty)
router.delete('/rooms_realty/:id', rooms_realtyContainer.deleteRooms_realty)





module.exports = router