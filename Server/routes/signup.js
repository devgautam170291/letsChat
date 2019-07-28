const { Router } = require('express');
const UserController = require('../controllers/user');
const RouteUtility = require('../lib/routeUtility');

class Signup extends RouteUtility{

    constructor(){
        super();
        this.router = Router();
        this.router.post('/', this.registerUser.bind(this));
    }

    registerUser(req, res, next){
        this._middlewareParams = arguments;
        let params = this.getRequestParams('body');

        let ctl = new UserController();
        ctl.create(params)
            .then(this.postSuccessResponse.bind(this))
            .catch()
    }
}

let { router } = new Signup();
module.exports = router;