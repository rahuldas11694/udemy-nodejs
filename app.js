const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs')

app.get('/', (req,res)=> {
		// res.send("<b>HEllo....</b>");
		res.send({
			name : 'rahuls',
			adskm : {
				name : 'eat',
				qwweq: 'dada',
				asd : 12
			},
			likes : ['asd','asda']
		})

})


app.listen(port,()=>{
	console.log("Servier is running...",port)
});