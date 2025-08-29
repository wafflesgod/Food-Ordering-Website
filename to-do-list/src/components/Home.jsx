import React from "react";
import ToDo from './components/to-do'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div>Home Page <br></br>
    Testing 123
    <h1>Hello</h1>
        <FontAwesomeIcon icon={faGithub} size="5x"/>
        <FontAwesomeIcon icon={faCoffee} size="4x" />
        <ToDo/>
    </div>
);
}