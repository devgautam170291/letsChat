const fs = require('fs');
const path = require('path');
const os = require('os');
const rootDirectory = path.join(__dirname, '../');

class System {
    constructor(){
        this.baseDir = rootDirectory;
        this.dir = {
            base: 			rootDirectory,
            config: 		rootDirectory + "/config",
            controller: 	rootDirectory + "/controllers",
            lib: 			rootDirectory + "/lib",
            model: 			rootDirectory + "/models",
            route: 			rootDirectory + "/routes",
            view: 			rootDirectory + "/views",
            public: 		rootDirectory + "/../public",
        };
    }

    fileExists(pathTofile){
        return ( fs.existsSync( pathTofile ) );
    }

    getDir(dirPath=false,file=''){
        let RES;
        if( dirPath && dirPath in this.dir ){
            RES = path.join( this.dir[dirPath] , file );
        }

        return RES;
    }

    createDirectoryIfNotExist(path){
        if(!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }

    getTodayDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '-' + mm + '-' + yyyy;
        return today;
    }
}

module.exports = new System();