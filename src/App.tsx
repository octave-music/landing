import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Blog from './pages/Blog'
import ForArtists from './pages/ForArtists'
import Developers from './pages/Developers'
import Partners from './pages/Partners'
import Investors from './pages/Investors'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="press" element={<Press />} />
          <Route path="blog" element={<Blog />} />
          <Route path="for-artists" element={<ForArtists />} />
          <Route path="developers" element={<Developers />} />
          <Route path="partners" element={<Partners />} />
          <Route path="investors" element={<Investors />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App