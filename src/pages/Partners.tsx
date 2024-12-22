import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'
import { Handshake, Globe, Target, TrendingUp } from 'lucide-react'

export default function Partners() {
  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Access millions of users worldwide"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Marketing",
      description: "Reach your ideal audience"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Scale your business with us"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Support",
      description: "Dedicated partnership team"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Partner with Us"
        description="Join forces with Octave and reach millions of music lovers worldwide."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Partner with Octave?</h2>
            <p className="text-gray-400 mb-6">
              Join our network of global partners and help shape the future of music streaming. Whether you're a brand, venue, or technology provider, we offer unique opportunities to collaborate and grow together.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
              Become a Partner
            </button>
          </div>
          <DeviceMockup 
            image="https://picsum.photos/seed/partner1/600/800"
            alt="Partnership Benefits"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-900/20"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <DeviceMockup 
            image="https://picsum.photos/seed/partner2/600/800"
            alt="Partnership Programs"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Partnership Programs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Brand Partnerships</h3>
                <p className="text-gray-400">Create unique campaigns and reach engaged audiences.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
                <p className="text-gray-400">Integrate your solutions with our platform.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Venue Partners</h3>
                <p className="text-gray-400">Connect with music lovers in your local area.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}