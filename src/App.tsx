import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<ComingSoon />} />
          <Route path="developers" element={<ComingSoon />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App