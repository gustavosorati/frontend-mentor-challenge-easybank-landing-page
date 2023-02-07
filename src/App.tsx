import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Hero } from './pages/Home/components/Hero'
import { GlobalStyles } from './styles/theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />

      <GlobalStyles />
    </div>
  )
}

export default App
