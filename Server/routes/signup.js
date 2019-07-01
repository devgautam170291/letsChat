const { Router } = require('express');
const UserController = require('../controllers/user');

class Signup {
    constructor(){
        this.router = Router();

        this.router.post('/', this.registerUser.bind(this));
    }

    registerUser(req, res, next){
        let params = arguments;

        console.log(params);

        let ctl = new UserController();
        ctl.create(params)
            .then()
            .catch()
    }
}

let { router } = new Signup();
module.exports = router;