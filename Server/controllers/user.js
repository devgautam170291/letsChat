const Models = require('../models');

module.exports = class User {
    constructor(){

    }

    create(params){
        return new Promise((Resolve, Reject)=>{
            return Models.user.create()
                .then(data=> Resolve(data))
                .catch(Err=> Reject(Err))
        })
    }
}