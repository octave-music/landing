import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'

export default function Careers() {
  const departments = [
    {
      name: "Engineering",
      positions: ["Senior Frontend Developer", "Backend Engineer", "Mobile Developer"]
    },
    {
      name: "Design",
      positions: ["UI/UX Designer", "Product Designer", "Visual Designer"]
    },
    {
      name: "Marketing",
      positions: ["Digital Marketing Manager", "Content Strategist", "Social Media Manager"]
    }
  ]

  return (
    <div>
      <PageHero 
        title="Join Our Team"
        description="Help us revolutionize the music industry with innovative solutions."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Octave?</h2>
            <div className="space-y-6 text-gray-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <DeviceMockup 
            image="https://picsum.photos/seed/careers1/600/800"
            alt="Work at Octave"
          />
        </div>

        <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-900/20">
              <h3 className="text-xl font-bold mb-4">{dept.name}</h3>
              <ul className="space-y-4">
                {dept.positions.map((position, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-gray-400">{position}</span>
                    <button className="text-purple-400 hover:text-purple-300">Apply →</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}