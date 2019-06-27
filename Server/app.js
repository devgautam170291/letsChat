const createError = require('http-errors');
const Express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const env = require('dotenv').config({path: path.join(__dirname, '.env')});
const system = require('../Server/lib/system');

class Application {
  constructor(){
    this.express = Express();
    this.loadMiddlewares();
    this.errorHandler();
  }

  loadMiddlewares(){
    this.express.use(logger('dev'));
    this.express.use(Express.json());
    this.express.use(Express.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(Express.static(path.join(__dirname, 'public')));
    this.setupLogs();
  }

  setupLogs(){
    if(process.env.NODE_ENV.toLowerCase() == 'development'){
      this.express.use(logger('dev'));
    }
    else{
      let directoryPath = path.join(system.baseDir, 'logs');
      system.createDirectoryIfNotExist(directoryPath);

      let fileName = "apiLogs-" + system.getTodayDate() +".log";
      let filePath = path.join(directoryPath, fileName);
      var logFilePath = fs.createWriteStream(filePath, {flag: 'a'});
      this.express.use(logger('combined', {stream: logFilePath}));
    }
  }

  errorHandler(){
    this.express.use(function(req, res, next){
      next(createError(404));
    })

    this.express.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
}

const {express} = new Application();
module.exports = express;