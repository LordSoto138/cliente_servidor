import "../assets/css/pokemon.css"
import PropTypes from "prop-types"

const showPokemon = "my-5"
const hidePokemon = "my-5 pokemon-shadow"

const Pokemon = (props) => {
    
    return(
        <div>
        <img src={props.winner} alt="Pokemon" width="400" className={props.youWon ? showPokemon : hidePokemon}/>
        </div>
    
    )
}

Pokemon.propTypes = {
    winner: PropTypes.string,
    youWon: PropTypes.bool,
}

export default Pokemon