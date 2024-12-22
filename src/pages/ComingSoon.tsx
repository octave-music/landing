import PageHero from '../components/PageHero'

export default function ComingSoon() {

  return (
    <div>
      <PageHero 
        title="Coming soon..."
        description="Insights, updates, and stories from the world of music"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="text-gray-400">Stay tuned for our latest updates and stories.</p>
        </div>
      </div>
    </div>
  )
}