import './App.css'
import Header from './components/Header'
import bgImage from './assets/image1.png'
import HeroSection from './components/HeroSection'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  return (
    <BrowserRouter>
    <div className='hero-pattern min-h-screen'>
    <Banner/>
    <Header/>
    <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
      
</BrowserRouter>

  )
}

export default App
