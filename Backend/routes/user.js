const router = require('express').Router();


const { userController } = require('../controllers');


router.post('/',userController.add);

module.exports = router;
