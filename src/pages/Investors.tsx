import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'
import { LineChart, Users, BarChart2, TrendingUp } from 'lucide-react'

export default function Investors() {
  const metrics = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Growth",
      value: "10M+",
      description: "Active monthly users"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Market Share",
      value: "15%",
      description: "In key markets"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Revenue Growth",
      value: "200%",
      description: "Year over year"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "User Retention",
      value: "85%",
      description: "Monthly retention rate"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Investor Relations"
        description="Discover investment opportunities in the future of music streaming."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Invest in Octave?</h2>
            <p className="text-gray-400 mb-6">
              Octave is revolutionizing the music streaming industry with our innovative free-to-use model. We're growing rapidly and creating value for both users and investors through technology and strategic partnerships.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
                Investment Deck
              </button>
              <button className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full hover:bg-purple-600/10 transition">
                Financial Reports
              </button>
            </div>
          </div>
          <DeviceMockup 
            image="https://picsum.photos/seed/investor1/600/800"
            alt="Investment Growth"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-900/20"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
              <p className="text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <DeviceMockup 
            image="https://picsum.photos/seed/investor2/600/800"
            alt="Financial Growth"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Investment Highlights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Market Leadership</h3>
                <p className="text-gray-400">Leading position in the free music streaming segment.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">Cutting-edge technology and unique business model.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
                <p className="text-gray-400">Expanding user base and market opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}