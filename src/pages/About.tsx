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
              I saw how outrageous the pricing was for other music sites, and I wanted to change that for myself and the people. Our mission is to make premium music accessible to everyone, completely free.
            </p>
            <p className="text-gray-400">
              We believe that music should be enjoyed by everyone without any barriers. That's why we created Octave, to provide high-quality music without the high costs.
            </p>
          </div>
          <DeviceMockup 
            image="/phone-1.png"
            alt="About Octave"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <DeviceMockup 
            image="/phone-2.png"
            alt="Our Values"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">User Privacy</h3>
                <p className="text-gray-400">Prioritizing the privacy and security of user data.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-400">Providing high-quality content and user experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-400">Building a supportive and engaging user community.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-400">Ensuring the platform is accessible to everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}