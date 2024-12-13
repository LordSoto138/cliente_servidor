import confetti from "canvas-confetti"
import PropTypes from "prop-types"

const handleClickButton = (isWinner, setYouWon) => {

    if (isWinner) {
        alert("You Won!");
        setYouWon(true);
        confetti({
        particleCount: 250,
    });
    
    return;
    }
    alert("You Lost!")
}

const PokemonButton = ({option, isWinner, setYouWon}) => {
    return(
        <div className="col-4">
        <button className="btn btn-primary px-4" onClick= {() => {handleClickButton(isWinner, setYouWon); setYouWon(isWinner)}}>{option.pokemon}</button>
        </div>
    )
}

PokemonButton.propTypes = {
    option: PropTypes.object,
    isWinner: PropTypes.bool,
    youWon: PropTypes.bool,
}

export default PokemonButton