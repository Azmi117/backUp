const express = require('express');
const router = express.Router();
const userController = require('./../controller/user.controller');

router.get('/users', userController.getAllUsers);
router.put('/users/edit/:id', userController.updateUser);
router.get('/users/:id', userController.getUserById);
router.post('/users/add', userController.createUser);
router.delete('/users/delete/:id', userController.deleteUser);

module.exports = router;
