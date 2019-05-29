import React from 'react';

function Display(props){
    console.log(props)
    var miniMonsta = props.pokemon.map(monster=>{
        return(
            <div key={monster.id}>
                <h1>{monster.name}</h1>
                <img src={monster.sprites.front_shiny} alt='poke pic'/>
                <button onClick={()=>props.edit(monster)}>Edit</button>
                <button onClick={()=>props.delete(monster)}>Delete</button>
            </div>
        )
    })
    return(
        <div>
            {miniMonsta}
        </div>
    )
}

export default Display