const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors');



const rappers = {
    '21 savage':{
        'birthName': 'Sheyaa',
        'birthLocation': 'London',
        'age': 29
    },

    'chance the rapper':{
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago',
        'age': 29
    },

    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }
    
}

app.use(
    cors({
      origin: 'http://127.0.0.1:5500/client-side-code/index.html',
      methods: 'GET,POST,PUT,DELETE',
      credentials: true,
    })
  );

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is now running on port ${PORT}! Betta Go catch it`)
})