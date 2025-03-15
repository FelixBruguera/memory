import "/src/styles/header.css"

const Header = ({score, bestScore}) => {
    return (
        <section id="header">
            <div id="buttons">
                <button type="button" className="header-item yellow-hover">Change cards</button>
                <button className="header-item red-hover" popoverTarget="how-to-play">How to play?</button>
            </div>
            <h1 id="title">Dragon Ball Memory</h1>
            <div id="scores">
                <p className="header-item yellow-hover">Score: {score}</p>
                <p className="header-item red-hover">Best Score: {bestScore}</p>
            </div>
            <div popover="auto" id="how-to-play">
                <p>Click on each of the 10 unique characters, making sure not to select any of them more than once</p>
            </div>
        </section>
    )

}

export default Header