import { useEffect } from "react";
import Pokemon from "./Pokemon"
import PokemonButton from "./pokemonButton";
import { useState } from "react";


const selectRandomPokemon = (max = 3) => {
    return Math.floor(Math.random() * max);
}

const Main = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonWinner, setPokemonWinner] = useState(3);
    const [youWon, setYouWon] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/pokemon/play").then(res => res.json()).then(data => {setPokemonList(data)});
        setPokemonWinner(selectRandomPokemon(3));
    }, []);

    return(
        <main>
        <hr/>
        <div className="text-center">
        <Pokemon winner={pokemonList[pokemonWinner]?.image} youWon={youWon}/>
        </div>
        <hr/>
        <div className="row gx-2, text-center">
            {
                pokemonList.map((option, index) => (
                    <PokemonButton option={option} isWinner={pokemonWinner === index} pokemonWinner={pokemonWinner} key={option.pokemon} setYouWon={setYouWon}/>
                ))
            }
        
        </div>
        </main>
    )
}

export default Main