import PageHero from '../components/PageHero'

export default function Blog() {
  // const blogPosts = [
  //   {
  //     date: "March 20, 2024",
  //     category: "Product Updates",
  //     title: "Introducing Enhanced Sound Quality",
  //     excerpt: "Experience music like never before with our latest audio quality improvements...",
  //     image: "https://picsum.photos/seed/blog1/800/600",
  //     readTime: "5 min read"
  //   },
  //   {
  //     date: "March 15, 2024",
  //     category: "Artist Spotlight",
  //     title: "Behind the Scenes with Rising Stars",
  //     excerpt: "Meet the emerging artists who are changing the music industry...",
  //     image: "https://picsum.photos/seed/blog2/800/600",
  //     readTime: "8 min read"
  //   },
  //   {
  //     date: "March 10, 2024",
  //     category: "Technology",
  //     title: "The Future of Music Streaming",
  //     excerpt: "Exploring how AI and machine learning are transforming music discovery...",
  //     image: "https://picsum.photos/seed/blog3/800/600",
  //     readTime: "6 min read"
  //   },
  //   {
  //     date: "March 5, 2024",
  //     category: "Industry News",
  //     title: "Music Industry Trends 2024",
  //     excerpt: "A deep dive into the latest trends shaping the music industry...",
  //     image: "https://picsum.photos/seed/blog4/800/600",
  //     readTime: "7 min read"
  //   }
  // ]

  return (
    <div>
      <PageHero 
        title="Blog"
        description="Insights, updates, and stories from the world of music"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Coming Soon...</h2>
          <p className="text-gray-400">Stay tuned for our latest updates and stories.</p>
        </div>
      </div>
    </div>
  )
}