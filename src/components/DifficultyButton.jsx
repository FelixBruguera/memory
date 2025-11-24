import Modal from "./Modal"


const DifficultyButton = ({ buttonMultiplier, multiplier, setMultiplier, title, reset}) => {
    const buttonInfo = {1: ["No timer", "No score multiplier"], 2: ["10 second timer", "2x score multiplier"],
        3: ["5 second timer", "3x score multiplier"]}
    const handleClick = () => {
        setMultiplier(buttonMultiplier)
        reset()
    }
    const icons = new Array(buttonMultiplier).fill(0)
    const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000ff"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>

    return (
        <div className="grid-button">
             <button type="button" id={multiplier === buttonMultiplier ? 'selected-item': null} 
            className="difficulty-item" onClick={handleClick}> 
                 <div>
                    <ul className="stars">
                        {icons.map(() => <li className="star">{icon}</li>)}
                    </ul>
                     <h3 className="difficulty-title">{title}</h3>
                     <ul className="difficulty-list">
                        {buttonInfo[buttonMultiplier].map(item => 
                            <li className="difficulty-listitem">{item}</li>
                        )}
                     </ul>
                 </div>
            </button>
        </div>
    )
}

export default DifficultyButton