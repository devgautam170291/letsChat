const constants = require('./constant');

module.exports = class RouteUtility {

    constructor(){
        this._middlewareParams = {
            req : null,
            res : null,
            next : null
        };
    }

    getRequestParams(params){
        let reqParamsArr = params
            .split(',')
            .map((p) =>{
                if( p in this._middlewareParams.req ){
                    return  ( typeof this._middlewareParams.req[p] == 'object' ) ? this._middlewareParams.req[p] : { [p] : this._middlewareParams.req[p] };
                }
            })
        params = params.concat( reqParamsArr );
        return Object.assign.apply(this,params);
    }

    getExpressResponse(){
        if(this._middlewareParams.res && typeof this._middlewareParams.res == "object"){
            return this.middlewares.res;
        }
        return null;
    }

    getSuccessResponse(params){

    }

    postSuccessResponse(data){
        let Res = constants.Response.post.success;
        Res.data = data;
        return this.getExpressResponse() ? this.getExpressResponse().status(Res.status).json(Res) : 'Error!! Res object is missing.';

    }
}