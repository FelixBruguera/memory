import { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import './styles/App.css'
import testdata from "./testdata.json"

function App() {
  const [data, setData] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicks, setClicks] = useState([])
  const [gameStatus, setGameStatus] = useState("playing")
  const [lastPlay, setLastPlay] = useState(null)

  useEffect(() => {
    setData(testdata.items)
  }, [])

  const shuffle = () => {
    let newIndexes = [...Array(data.length).keys()]
    let newArray = new Array(data.length)
    data.forEach((item) => {
      let randomIndex = Math.floor(Math.random() * newIndexes.length)
      let newIndex = newIndexes[randomIndex]
      newArray = newArray.toSpliced(newIndex, 1, item)
      newIndexes = newIndexes.toSpliced(randomIndex, 1)
    })
    setData(newArray)
  }

  const checkGameOver = (id) => clicks.some((num) => num === id)

  const handePlay = (id) => {
    if (checkGameOver(id)) { 
      setLastPlay(id)
      return setGameStatus("loss")}
    let newScore = score + 1
    setScore(newScore)
    if (newScore > bestScore) { setBestScore(newScore)}
    shuffle()
  }

  const handleClick = (id) => {
    let newClicks = clicks
    setClicks(newClicks.concat(id))
    return handePlay(id)
  }

  const playAgain = () => {
    setScore(0)
    setClicks([])
    setGameStatus("playing")
    setLastPlay(null)
    shuffle()
  }

  if (gameStatus === 'loss') {
    const character = data.find((char) => char.id === lastPlay)
    return (
      <>
      <Header score={score} bestScore={bestScore}/>
      <div id='game-over'>
        <h2>Game Over!</h2>
        <p>You clicked on <p id="game-over-character">{character.name}</p> twice</p>
        <button type='button' className='header-item play-again blue-hover' onClick={playAgain}>Play Again</button>
      </div>
      </>
    )
  }
  return (
    <>
     <Header score={score} bestScore={bestScore}/>
     <section id="cards">
      {data.map((character) => 
        <Card key={character.id} id={character.id}name={character.name} image={character.image} onClick={handleClick}/>
        )}
      </section>
    </>
  )
}

export default App
