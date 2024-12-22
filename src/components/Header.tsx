import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
            <div 
              className="flex items-center transform transition-transform duration-200 hover:scale-105 cursor-pointer" 
              onClick={() => window.location.href = '/'}
            >
              <img src="/logo.png" alt="Octave" className="h-8" />
              <span className="text-white ml-2 text-xl">Octave</span>
            </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="/#premium" className="text-gray-300 hover:text-white transition">Why Octave</a>
            <button 
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              onClick={() => window.open('https://beta.octave.gold', '_blank')}
            >
              Open Web Player (Beta)
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#premium" className="text-gray-300 hover:text-white transition">Why Octave</a>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"  onClick={() => window.open('https://beta.octave.gold', '_blank')}>
              Open Web Player (Beta)
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}