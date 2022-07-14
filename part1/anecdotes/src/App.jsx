import { useState } from 'react'


const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]

const Button = ({onClick, text, id}) => {
  return (
    <button onClick={onClick} id={id}>{text}</button>
  )
}

const getRandomNumber = (arr) => {
  return Math.floor(Math.random() * (arr.length))
}

const initialArray = new Array(anecdotes.length).fill(0)

const App = () => {

  const [selected, setSelected] = useState([])
  const [buttonId, setId] = useState(0)
  const [points, setPoints] = useState(initialArray)
  const [mostVoted, setMostVoted] = useState('No one has voted yet')

  const displayHandler = () => {
    const randomNumber = getRandomNumber(anecdotes)
    setSelected(anecdotes[randomNumber])
    setId(randomNumber)  
  }

  const voteHandler = () => {
    const copy = [...points]
    copy[buttonId] += 1
    setPoints(copy)
    mostVotedHandler(copy)
  }

  const mostVotedHandler = (arr) => {
    const max = Math.max(...arr)
    const index = arr.indexOf(max)
    setMostVoted(anecdotes[index])
  }

  

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{selected}</p>
      <p>Votes: {points[buttonId]}</p>
      <Button onClick={displayHandler} text={'next anecdote'}/>
      <Button onClick={voteHandler} id={buttonId} text={'vote'}/>
      <h1>The most voted anecdote is:</h1>
      <p>{mostVoted}</p> 
    </div>
  )
}

export default App
