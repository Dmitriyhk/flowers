import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <hr/>
      <Main/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default App