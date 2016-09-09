# Views Static or Dynamic

##Static 

put it into a folder: public
and put this phrase before all the routes

~~~js
	app.use(express.static(__dirname+'public'));
~~~

##### importance c'est que cette repertoire est cache pour le client. 

~~~html
	<header>
		<img src="/img/logo.png" alt="LOGO MT"/>
	</header>
~~~


##Dynamic 

Views are extrodinare because it can affiche dynamic informations 

We do sth to the about.handlebars. 

define a list in meadowlark.js 

~~~js

var fortunes = [
	"Conauer your fears or they will conquer you. ",
	"Rivers need springs.",
	"Do not fear what you don't know",
	"You will have a pleasant surprise<",
	"Whenever possible, keep it simple.",
];


app.get('/about', function(req,res){
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:randomFortune});
});

~~~

in about.handlebars

~~~html
<h1>About Meadowlark Travel</h1>
<p> your fortune ofr the day:</p>

<blockquote>{{fortune}}</blockquote>
~~~

