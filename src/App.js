import React, {Component} from 'react';
import './App.css';
import Display from './components/Display'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      pokemon:[],
      name:''
    }
  }


  // initialization (setting state/props) -> rendering -> mounting -> updating -> unmounting
  
  componentDidMount(){
    axios.get('/api/getpokemon').then(pokemon=>{
      // console.log.(pokemon)
      this.setState({
        pokemon:pokemon.data
      })
    })
    //make a call to the server for the pokemons
  }

  async catchNewPokemon(){
    //random generator
    const random = Math.floor(Math.random()*151)
    console.log(random)
    let newPokemon
    //axios call to get a random pokemon from the 3rd party
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`).then(response=>{
      newPokemon=response.data
    })
    const {name, id, sprites} = newPokemon
    axios.post('/api/addPokemon',{name,id,sprites}).then(response=>{
      this.setState({
        pokemon:response.data
      })
    })
    //then add to the db in the backend
  }

  edit=(monster)=>{
    // console.log(monster)
    const {id} = monster
    const {name} = this.state
    if(name !== ''){
      axios.put(`/api/editPokemon/${id}`,{name}).then(monster=>{
        // console.log(monster)
        this.setState({
          pokemon:monster.data,
          name:''
        })
      })
    }

  }
  
  delete=(monster)=>{
    console.log(monster)
    const {id} = monster
    axios.delete(`/api/deletePokemon/${id}`).then(response=>{
      console.log(response.data)
      this.setState({
        pokemon:response.data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={()=>this.catchNewPokemon()}>Catch New Pokemon</button>
        <input value={this.state.name} type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
        <Display pokemon={this.state.pokemon} edit={this.edit} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
