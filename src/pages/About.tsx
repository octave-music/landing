import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'

export default function About() {
  return (
    <div>
      <PageHero 
        title="About Octave"
        description="Our mission is to make premium music accessible to everyone, completely free."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <DeviceMockup 
            image="https://picsum.photos/seed/about1/600/800"
            alt="About Octave"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <DeviceMockup 
            image="https://picsum.photos/seed/about2/600/800"
            alt="Our Values"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-400">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}