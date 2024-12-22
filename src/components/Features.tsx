import { Download, Wifi, Clock, Heart, Share2, Radio } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Offline Mode",
      description: "Download your favorite tracks and listen anywhere"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "High Quality Streaming",
      description: "Crystal clear audio up to lossless FLAC and OPUS audio"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Unlimited Skips",
      description: "Skip as many tracks as you want, go ahead its fine"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Playlists",
      description: "AI-powered recommendations just for you"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Share Music",
      description: "Share your favorite tracks with friends"
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Live Lyrics",
      description: "Follow along with synchronized lyrics"
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience music like never before with our premium features, all included in your free account.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-900/20 hover:border-purple-700/30 transition"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}