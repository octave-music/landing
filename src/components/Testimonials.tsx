import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "https://picsum.photos/seed/user1/100/100",
      quote: "I can't believe this is completely free! The sound quality is amazing and I love the personalized playlists.",
      rating: 5
    },
    {
      name: "Michael Chen",
      avatar: "https://picsum.photos/seed/user2/100/100",
      quote: "The offline mode is a game-changer for my commute. No more streaming issues in the subway!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      avatar: "https://picsum.photos/seed/user3/100/100",
      quote: "Best music platform I've used. The interface is clean and it has all the features I need.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join millions of happy users who are already enjoying premium music for free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-900/20"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">Verified User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}