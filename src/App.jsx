import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Membership from './components/Membership'
import Reasons from './components/Reasons'
import Trainer from './components/Trainer'

function App() {

  return (
    <>
    <div className='container p-3  max-w-6xl mx-auto'>
        <Header/>
        <Hero/>
        <Reasons/>
        <Membership/>
        <About/>
        <Trainer/>
        <Footer/> 
     </div>
    </>
  )
}

export default App
