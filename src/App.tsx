import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Awards from './components/sections/Awards'
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'
import CustomCursor from './components/ui/CustomCursor'
import BackgroundEffects from './components/ui/BackgroundEffects'

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key="main-app"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="min-h-screen text-slate-50 selection:bg-blue-500/30"
      >
        <CustomCursor />
        <BackgroundEffects />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Awards />
          <Projects />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
