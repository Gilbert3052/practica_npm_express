const express = require('express')

const file = require('./package.json')

const port = 9000

const app = express()


app.get('/hola', (peticion, respuesta) => {
    respuesta.json({
        name: 'Gilbert',
        age: 21,
        country: 'Venezuela'
    })
})

app.post('/hola', (peticion, respuesta) => {
    respuesta.json([
        'Globant',
        'Facebook',
        'Microsoft'
    ])
})

app.patch('/hola', (peticion, respuesta) => {
    respuesta.json([
        'VideoGames',
        'Music',
        'Coding'
    ])
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})