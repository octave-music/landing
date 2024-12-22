import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'
import { Music, BarChart, DollarSign, Users } from 'lucide-react'

export default function ForArtists() {
  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Distribution",
      description: "Get your music on our platform quickly and easily"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics",
      description: "Detailed insights about your listeners and track performance"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Revenue Share",
      description: "Fair and transparent revenue sharing model"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fan Engagement",
      description: "Connect with your audience directly through our platform"
    }
  ]

  return (
    <div>
      <PageHero 
        title="For Artists"
        description="Share your music with millions of listeners and grow your audience."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Octave?</h2>
            <p className="text-gray-400 mb-6">
              Join thousands of artists who are already sharing their music with millions of listeners worldwide. Our platform provides the tools and exposure you need to grow your audience and succeed in the music industry.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>
          <DeviceMockup 
            image="https://picsum.photos/seed/artists1/600/800"
            alt="Artist Dashboard"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-900/20"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <DeviceMockup 
            image="https://picsum.photos/seed/artists2/600/800"
            alt="Artist Analytics"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Powerful Tools for Artists</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Artist Dashboard</h3>
                <p className="text-gray-400">Track your performance, manage your content, and engage with your audience all in one place.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-400">Get detailed insights about your listeners, including demographics, locations, and listening habits.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Direct Fan Engagement</h3>
                <p className="text-gray-400">Connect with your fans through exclusive content, messages, and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}