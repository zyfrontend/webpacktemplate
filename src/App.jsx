import React from 'react'
import logo from './logo.svg'
import Hello from './Hello.tsx'
import './App.less'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello></Hello>
      </header>
    </div>
  )
}

export default App
