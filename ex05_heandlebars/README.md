#Using Handlebars

- not that abstract 
- Jade is also not bad. but abstract HTML

------------

~~~bash 
npm install --save express3-handlebars
~~~

~~~js
//set Handlebars to view engine 
var handlebars = require('express3-handlebars')
.create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
~~~

~~~bash
ex05_heandlebars xicunhan$ tree views
views
├── 404.handlebars
├── 500.handlebars
├── about.handlebars
├── home.handlebars
└── layouts
    └── main.handlebars

~~~


------------

