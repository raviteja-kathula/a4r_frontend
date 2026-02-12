// AI Generated Code by Deloitte + Cursor (BEGIN)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/women" element={<ProductListingPage />} />
            <Route path="/men" element={<ProductListingPage />} />
            <Route path="/accessories" element={<ProductListingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
// AI Generated Code by Deloitte + Cursor (END)
