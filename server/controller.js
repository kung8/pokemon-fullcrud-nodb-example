const pokedb = require('./pokemondb')

module.exports = {
    getPokemon:(req,res)=>{
        res.status(200).send(pokedb)
    },
    addPokemon:(req,res)=>{
        // console.log(req.body)
        pokedb.push(req.body)
        res.status(200).send(pokedb)
    },
    editPokemon:(req,res)=>{
        console.log(req.body,req.params)
        const found = pokedb.findIndex(monster=>{
            return monster.id === +req.params.id
        })
        let newNamedPoke = {
            id:pokedb[found].id, 
            sprites:pokedb[found].sprites, 
            name:req.body.name
        }
        pokedb.splice(found,1,newNamedPoke)
        res.status(200).send(pokedb)
    },
    deletePokemon:(req,res)=>{
        const found = pokedb.findIndex(monster=>{
            return monster.id === +req.params.id
        })
        pokedb.splice(found,1)
        res.status(200).send(pokedb)
    }
}

