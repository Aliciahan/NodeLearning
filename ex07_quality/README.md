#Running Server

~~~bash
nodemon 
# restart automatically after js files' changing.
Grunt 
grunt-nodemon
~~~

- mocha


	pages test

~~~bash
npm install --save-dev mocha

mkdir public/vendor
     cp node_modules/mocha/mocha.js public/vendor
     cp node_modules/mocha/mocha.css public/vendor
~~~

- Chai

~~~bash
npm install --save-dev chai
     cp node_modules/chai/chai.js public/vendor
~~~

~~~js
app.use(function(req, res, next){
res.locals.showTests = app.get('env') !== 'production' 
&& req.query.test === '1';
             next();
});
~~~


### Global test
### spicific page test

## Grammaire Test

~~~bash

npm install -g jshint
jshint meadowlark.js

~~~

## Link Check 

~~~bash
LinkChecker http://wummel.github.io/linkchecker/

linkchecker http://localhost:3000
~~~





