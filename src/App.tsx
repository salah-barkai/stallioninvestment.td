import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import SecteursInvestissements from './pages/SecteursInvestissements'
import Conventions from './pages/Conventions'
import SupabaseTest from './components/SupabaseTest'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conventions" element={<Conventions />} />
          <Route path="/secteurs-investissements" element={<SecteursInvestissements />} />
          <Route path="/test-supabase" element={<SupabaseTest />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
