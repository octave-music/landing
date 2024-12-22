import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'

export default function Press() {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Octave Reaches 10 Million Active Users",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      date: "February 28, 2024",
      title: "New Feature Launch: AI-Powered Recommendations",
      excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
      date: "January 10, 2024",
      title: "Octave Partners with Major Record Labels",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco..."
    }
  ]

  return (
    <div>
      <PageHero 
        title="Press & Media"
        description="Latest news and updates from Octave."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <DeviceMockup 
            image="https://picsum.photos/seed/press1/600/800"
            alt="Press Coverage"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <div className="space-y-8">
              {pressReleases.map((press, index) => (
                <div key={index} className="border-b border-gray-800 pb-8">
                  <div className="text-sm text-purple-400 mb-2">{press.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{press.title}</h3>
                  <p className="text-gray-400">{press.excerpt}</p>
                  <button className="mt-4 text-purple-400 hover:text-purple-300">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}