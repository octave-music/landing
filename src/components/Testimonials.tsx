import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mango",
      avatar: "https://cdn.discordapp.com/avatars/612286260580712468/7dbc113f33f8d02bdf1a10745d3ef339.webp?size=80",
      quote: "love the offline mode, it's a lifesaver when I'm on the go",
      rating: 5
    },
    {
      name: "Alive",
      avatar: "https://images-ext-1.discordapp.net/external/k3TurtS7kNaYR9qsQ27RKqtCgqWl4YbSv6Ck-ly60do/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/383910519867703298/1915e2b8a378df13d57e4a2c741ad092.png?format=webp&quality=lossless&width=420&height=420",
      quote: "me no pay me like free music",
      rating: 5
    },
    {
      name: "Ziad Senior",
      avatar: "https://images-ext-1.discordapp.net/external/oQo3_suoffyffjaqlqmGJwEuqHdA7Az59uRsBDkocF8/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/324718383733932033/aa026cf7019d31b1412ba6cdd27b4b68.png?format=webp&quality=lossless&width=405&height=405",
      quote: "finally found an app that just works! high quality audio, downloading for offline use and even a clean UI",
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
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-900/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
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