const express = require('express');
const app = express();
const hbs = require('hbs');


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


app.listen(3000,()=>{
	console.log("Servier is running...")
});