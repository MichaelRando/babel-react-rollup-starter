// Import React and React-dom.
import React from 'react'
import ReactDOM from 'react-dom'

// Import the components.
import { DummyComponent } from './components/dummy-component.jsx'
import { Navbar } from 'reactstrap'

// Define the root element.
const root = document.querySelector('main')

// Append the DummyComponent to the root element.
ReactDOM.render(<DummyComponent><Navbar color='faded' light toggleable /></DummyComponent>, root)
