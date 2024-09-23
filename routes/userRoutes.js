const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes and map them to controller functions
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

//ito po sir ay for database na 

module.exports = router;

