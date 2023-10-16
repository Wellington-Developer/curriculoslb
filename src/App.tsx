import './App.css'
import { About } from './components/About'
import { Clients } from './components/Clients'
import { Header } from './components/Header'
import { Info } from './components/Info'
import { Intro } from './components/Intro'

function App() {

  return (
    <>
      <Header />
      <Intro />
      <Clients />
      <Info />
      <About />
    </>
  )
}

export default App
