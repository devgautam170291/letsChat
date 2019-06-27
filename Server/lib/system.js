const fs = require('fs');
const path = require('path');
const os = require('os');
const rootDirectory = path.join(__dirname, '../');

class System {
    constructor(){
        this.baseDir = rootDirectory;
    }

    fileExists(pathToFile){
        return fs.existsSync(pathToFile);
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