const express = require('express')
const ctrl = require('./controller')
const app = express()
app.use(express.json())
const SERVER_PORT = 3456

//ENDPOINTS
//receive the call from the FE -> do the call
app.get('/api/getpokemon',ctrl.getPokemon)
app.post('/api/addPokemon',ctrl.addPokemon)
app.put('/api/editPokemon/:id',ctrl.editPokemon)
app.delete('/api/deletePokemon/:id',ctrl.deletePokemon)


app.listen(SERVER_PORT,()=>console.log(`Good job we successfully connnected to port ${SERVER_PORT}`))




