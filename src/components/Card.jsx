import "/src/styles/card.css"

const Card = ({ id, name, image, onClick }) => {
    return (
        <div className="card" data-id={id} onClick={(e) => onClick(id)}>
            <img src={image} alt={name}></img>
            <p className="character-name">{name}</p>
        </div>
    )

}

export default Card