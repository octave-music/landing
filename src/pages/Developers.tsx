import PageHero from '../components/PageHero'
import DeviceMockup from '../components/DeviceMockup'
import { Code, Book, Webhook, Key } from 'lucide-react'

export default function Developers() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "REST API",
      description: "Powerful and flexible REST APIs for integration"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Documentation",
      description: "Comprehensive guides and API references"
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: "Webhooks",
      description: "Real-time event notifications and updates"
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Authentication",
      description: "Secure OAuth 2.0 authentication system"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Developers"
        description="Build amazing music experiences with our powerful APIs and SDKs."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Build with Octave</h2>
            <p className="text-gray-400 mb-6">
              Access our comprehensive suite of APIs and development tools to integrate Octave's music streaming capabilities into your applications. Whether you're building a mobile app, website, or connected device, we've got you covered.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/octave-music/frontend" 
                className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
              >
                Get API Key
              </a>
              <a 
                href="https://github.com/octave-music/frontend" 
                className="border border-purple-600 text-purple-400 px-6 py-3 rounded-full hover:bg-purple-600/10 transition"
              >
                View Documentation
              </a>
            </div>
          </div>
          <DeviceMockup 
            image="/phone-2.png"
            alt="Developer Tools"
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
            image="/phone-1.png"
            alt="Code Example"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Developer Resources</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p className="text-gray-400">Complete API documentation with examples and use cases.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SDKs & Libraries</h3>
                <p className="text-gray-400">Official SDKs for popular programming languages and platforms.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sample Projects</h3>
                <p className="text-gray-400">Ready-to-use example projects to jumpstart your development.</p>
              </div>
            </div>
            <p className="text-gray-400 mt-6">
              Octave is open source on <a href="https://github.com/octave-music/frontend" className="text-purple-600 hover:underline">GitHub</a>. Check out the repository for more information and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}