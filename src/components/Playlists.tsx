import { Play } from 'lucide-react';

export default function Playlists() {
  const playlists = [
    {
      title: "Top Hits 2024",
      image: "https://picsum.photos/seed/playlist1/300/300",
      songs: "50 songs",
      duration: "2hr 45min"
    },
    {
      title: "Chill Vibes",
      image: "https://picsum.photos/seed/playlist2/300/300",
      songs: "40 songs",
      duration: "2hr 15min"
    },
    {
      title: "Workout Energy",
      image: "https://picsum.photos/seed/playlist3/300/300",
      songs: "45 songs",
      duration: "2hr 30min"
    },
    {
      title: "Study Focus",
      image: "https://picsum.photos/seed/playlist4/300/300",
      songs: "35 songs",
      duration: "1hr 55min"
    }
  ];

  return (
    <section className="py-20 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Playlists</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playlists.map((playlist, index) => (
            <div 
              key={index}
              className="group relative rounded-lg overflow-hidden bg-[#0A0A0A] hover:bg-[#111111] transition"
            >
              <div className="aspect-square relative">
                <img 
                  src={playlist.image} 
                  alt={playlist.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Play className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{playlist.title}</h3>
                <p className="text-sm text-gray-400">{playlist.songs} • {playlist.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}