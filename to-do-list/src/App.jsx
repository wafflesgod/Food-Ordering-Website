import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/to-do'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
      <div>
        <h1>Hello</h1>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faCoffee} size="2x" />
        <ToDo/>
    </div>
    </>
  )
}

export default App
