import React, { useState, Fragment } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

// this is such a simple thing why bring in react-router */
const App = () => {
  const [page, setPage] = useState('home')

  return (
    <Fragment>
      <Header
        setHome={() => setPage('home')}
        setProjects={() => setPage('projects')}
        setAbout={() => setPage('about')}
        setContact={() => setPage('contact')}
      />
      {page === 'home' && <Home />}
      {page === 'projects' && <Projects />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
    </Fragment>
  )
}

export default App

/*    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
