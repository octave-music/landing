import PageHero from '../components/PageHero'

export default function Blog() {
  const blogPosts = [
    {
      date: "March 20, 2024",
      category: "Product Updates",
      title: "Introducing Enhanced Sound Quality",
      excerpt: "Experience music like never before with our latest audio quality improvements...",
      image: "https://picsum.photos/seed/blog1/800/600",
      readTime: "5 min read"
    },
    {
      date: "March 15, 2024",
      category: "Artist Spotlight",
      title: "Behind the Scenes with Rising Stars",
      excerpt: "Meet the emerging artists who are changing the music industry...",
      image: "https://picsum.photos/seed/blog2/800/600",
      readTime: "8 min read"
    },
    {
      date: "March 10, 2024",
      category: "Technology",
      title: "The Future of Music Streaming",
      excerpt: "Exploring how AI and machine learning are transforming music discovery...",
      image: "https://picsum.photos/seed/blog3/800/600",
      readTime: "6 min read"
    },
    {
      date: "March 5, 2024",
      category: "Industry News",
      title: "Music Industry Trends 2024",
      excerpt: "A deep dive into the latest trends shaping the music industry...",
      image: "https://picsum.photos/seed/blog4/800/600",
      readTime: "7 min read"
    }
  ]

  return (
    <div>
      <PageHero 
        title="Blog"
        description="Insights, updates, and stories from the world of music"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-gradient-to-br from-purple-900/20 to-transparent rounded-xl overflow-hidden border border-purple-900/20 hover:border-purple-700/30 transition"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-purple-400">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}