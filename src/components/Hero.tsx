
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

function scrollToContent() {
  const content = document.getElementById('content');
  if (content) {
    content.scrollIntoView({ behavior: 'smooth' });
  }
}
function FloatingArrow() {
  const [isBobbing, setIsBobbing] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIsBobbing((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      onClick={scrollToContent}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-10 right-10 cursor-pointer transition-transform duration-500 ${
        isBobbing ? 'translate-y-2' : 'translate-y-0'
      } ${isHovered ? 'scale-110' : 'scale-100'} flex items-center justify-center`}
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-full p-3 flex items-center justify-center">
        <ChevronDown size={32} className="text-white" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-900 fade-out">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <img src="/laptop.png" alt="Site Mockup" className="mx-auto mb-4 w-3/4 sm:w-1/2" />
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Premium Music. <span className="text-purple-400">Always Free.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
              Stream millions of songs without ads, offline playback, and unlimited skips. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition flex items-center justify-center gap-2">
              <Play size={18} fill="white" />
                  
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <FloatingArrow />
      <div id="content" className="pt-24">
        {/* Content to scroll to */}
      </div>
    </>
  );
}