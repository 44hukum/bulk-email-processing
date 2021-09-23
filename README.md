# Bulk Email Processor
Initially, The bulk mail processor usage MVC(model, view, controller) to process emails. <br />
tech used: <br />
    nodejs-express,<br />
    mongodb as a database<br />
    express handelbars as a templating engine <br />
    and all the required packages are inside package.json file at the root directory<br />

main.js inside src is the gateway for our webapplication.

# usage commands
```bash
npm start #to start server
npm run stress #to run stress test
npm test  #to run test
``` 


<br />
   

* #public filder hosts all the assets for email processor
    * assets
        * bootstrap
        * css
        * img
        * js

* #Source folders for email processor
  src main folder which is a single source folder for entire code base

  * models:
        include schemas for database and export models using mongoose ODM for mongodb
  
  * router:
        used for router middleware to route the different request