
import { useContext } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { ThemeContaxt } from './context/ThemeProvider'

const App = () => {
  const context = useContext(ThemeContaxt)
  return (
    <div className={`min-h-screen ${context.theme === "light" ? "" : "bg-black text-white"}`}>
      <Header />
      <main className='container mx-auto px-6'>
        <Hero />
      </main>
    </div>
  )
}

export default App