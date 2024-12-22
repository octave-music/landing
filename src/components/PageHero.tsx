interface PageHeroProps {
  title: string
  description: string
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  )
}