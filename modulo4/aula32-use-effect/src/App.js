import React,{useState,useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./PokeCards/PokeCards";


export default function App (){
  const [pokeList,setPokelist]=useState([])

  const [pokeName,setPokeName] = useState("")
  // método que roda após a montagem do componente
  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokelist( response.data.results );
      })
      .catch(err => {
        console.log(err);
      });

  },[])
  

  const changePokeName = event => {
    setPokeName( event.target.value );
  };

 
    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );

}

