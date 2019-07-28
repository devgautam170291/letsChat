const { Router } = require('express');

class Logout {
    constructor(){
        this.router = Router();
    }
}

const { router } = new Logout();
module.exports = router;