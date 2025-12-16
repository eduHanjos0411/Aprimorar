
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { useReveal } from './hooks/useReveal'
import { Servicos } from './components/Servicos/Index'
import { Depoimentos } from './components/Depoimentos/Depoimentos'

function App() {
  useReveal()
  
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Servicos/>
        <Depoimentos/>
      </main>
    </>
  );
}

export default App;

