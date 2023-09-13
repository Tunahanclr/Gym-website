import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Membership from './components/Membership'
import Reasons from './components/Reasons'

function App() {

  return (
    <>
    <div className='container p-3  max-w-6xl mx-auto'>
        <Header/>
        <Hero/>
        <Reasons/>
        <Membership/>
        <About/>
        
     </div>
    </>
  )
}

export default App
