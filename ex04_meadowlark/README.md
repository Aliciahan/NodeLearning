#Using Express

~~~js
var express = require('express');
var app = express();
~~~

- app.get() GET
- app.post() POST

####Cette fois ci, il met tous les caracteres au Small case automatiquement. 
 **res.send** à la place de res.end de Node
 **res.status** à la place de res.writeHead
 **res.type** a la place du Content-Type
 ----
 
 __app.use__ pour 404 et 500
 
 ATTENTION, l'ordre pour app.get et use est EXTREMEMENT important. 
 