const db = require('../models');
const send = require('send');
const User = db.User

class UserController {
    static getAllUsers = async (req, res, next) => {
        const user = await User.findAll();
        return res.json({ data: user });
    };

    static getUserById = async (req, res, next) => {
        const user = await User.findByPk(req.params.id)

        if(!user) return res.status(404).json({message: 'Not found'});

        return res.json({ data: user });
    }
    static createUser = async (req, res, next) => {
        try{
            const user = await User.create({
                email: req.body.email,
                gender: req.body.gender,
                password: req.body.password,
                role: req.body.role
            });
            res.status(201).json(user);
        }
        catch(err){
            res.status(500).send(err.message);
        }
    }
    static updateUser = async (req, res, next) => {
        try{
            const user = await User.findByPk(req.params.id);
            if(!user) return res.status(404).send('User Not Found');

            user.email = req.body.email;
            user.gender = req.body.gender;
            user.password = req.body.password;
            user.role = req.body.role;
            await user.save();

            res.json(user);

        }catch (err){
            res.status(500),send(err.message);
        }
    
    };
    static deleteUser = async (req, res, next) => {
        try{
            const user = await User.findByPk(req.params.id);
            if(!user) return res.status(404).send('User Not Found');

            await user.destroy();
            res.json(user);

        }catch (err){
            res.status(500),send(err.message);
        }
    
    };
}

module.exports = UserController;