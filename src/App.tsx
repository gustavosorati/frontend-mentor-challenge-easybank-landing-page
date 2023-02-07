import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Hero } from './pages/Home/components/Hero'
import { GlobalStyles } from './styles/theme'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
      <Home />

      <GlobalStyles />
    </div>
  )
}

export default App
