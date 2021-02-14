const express = require('express')

const app = express();

app.use(express.urlencoded({extended :  true}));
app.use(express.json())

app.set('port',process.env.PORT || 3001)

app.use(require('./controllers/hotelcontroller'))

app.listen(app.get('port'), ()=>{
    console.log(`conectado en el puerto ${app.get('port')}`)
})

