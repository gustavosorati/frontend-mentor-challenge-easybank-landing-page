import * as Styled from './styles'

import { Hero } from "./components/Hero"
import { Header } from '../../components/Header'
import { OurFeatures } from './components/OurFeatures'
import { LatestArticles } from './components/LatestArticles'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <div>
      <Header />
      
      <Hero />

      <OurFeatures />
      
      <LatestArticles />

      <Footer />
    </div>

  )
}