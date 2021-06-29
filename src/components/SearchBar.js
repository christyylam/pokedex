import {useEffect, useState} from 'react';
import PokemonCard from '../components/PokemonCard';
import '../styles.css';

const SearchBar = () => {
     //hooks
    //1st param declares a state variable (eg pokemon)
    //pokmeon is all the data from the api and is used to make the pokemon cards
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonName, setPokemonName] = useState("");

    //requesting pokemon data from the api
    const requestPokemon = async () => {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const json = await res.json();
    setPokemonData(json);
}

// useEffect(() => {
//     requestPokemon();
// }, []);//eslint-disable-line react-hooks/exhaustive-deps

const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
}

const handleSubmit = (e) => {
    e.preventDefault();
    requestPokemon();
}

return (
    <div className="SearchBar"> 
    <form onSubmit= {handleSubmit}>
            <input
                id="search"
                placeholder="Enter Pokemon Name"
                onChange= {handleChange}
                value={pokemonName}
            />
        <input type="submit" value= "Search Pokemon!" id= "searchButton"/>
    </form>
        <PokemonCard pokemon = {pokemonData}/>
    </div>
)
}

export default SearchBar;