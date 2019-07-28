const {Router} = require('express');

class Login {
    constructor(){
        this.router = Router();

        this.router.get('/', this.getUser.bind(this));
        this.router.post('/', this.postUser.bind(this));
    }

    getUser(req, res, next){
        res.send('working');
    }

    postUser(req, res, next){

    }
}

let {router} = new Login();
module.exports = router;