import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} exercises={course.exercises}/>
      <Total exercises={course.parts.map(x=>x['exercises'])}/>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
// ReactDOM.render(<App />, document.getElementById('root'))
