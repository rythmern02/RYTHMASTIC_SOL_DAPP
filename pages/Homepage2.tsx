import React from 'react';

const MusicPlatformMainPage = () => {
  const playlists = [
    { id: 1, title: 'Top Hits', description: 'The hottest songs right now' },
    { id: 2, title: 'Chill Vibes', description: 'Relaxing tunes for any mood' },
    { id: 3, title: 'Rock Classics', description: 'Timeless rock anthems' },
    { id: 4, title: 'Indie Spotlight', description: 'Discover emerging indie artists' },
    { id: 5, title: 'Electronic Beats', description: 'Energizing electronic and dance tracks' },
    { id: 6, title: 'Hip-Hop Grooves', description: 'The best in hip-hop and rap' },
    { id: 7, title: 'Acoustic Bliss', description: 'Unplugged and soulful acoustic performances' },
    { id: 8, title: 'Jazz Legends', description: 'Explore the world of jazz with legendary artists' },
    { id: 9, title: 'Country Roads', description: 'Hit the road with classic country tunes' },
    { id: 10, title: 'Latin Fever', description: 'Feel the rhythm with Latin and salsa hits' },
    // Add more playlists as needed
  ];
  
  const trendingSongs = [
    { id: 1, title: 'Sunset Groove', artist: 'Groovy Beats Ensemble' },
    { id: 2, title: 'Ocean Serenade', artist: 'Soothing Sounds Orchestra' },
    { id: 3, title: 'City Lights Jazz', artist: 'Urban Jazz Collective' },
    { id: 4, title: 'Ethereal Dreams', artist: 'Dreamy Melodies Trio' },
    { id: 5, title: 'Midnight Rhythms', artist: 'Nightfall Harmony Quartet' },
    { id: 6, title: 'Mountain Breeze', artist: 'Alpine Echoes Symphony' },
    { id: 7, title: 'Salsa Fiesta', artist: 'Latin Groove Masters' },
    { id: 8, title: 'Funky Fusion', artist: 'Eclectic Beats Ensemble' },
    { id: 9, title: 'Acoustic Serenity', artist: 'Harmony Acoustics' },
    { id: 10, title: 'Electro Pulse', artist: 'Electric Pulse Collective' },
  ];
  
  const recommendedArtists = [
    { id: 1, name: 'Melody Weaver' },
    { id: 2, name: 'Harmonic Explorer' },
    { id: 3, name: 'Rhythm Maestro' },
    { id: 4, name: 'Lyric Luminary' },
    { id: 5, name: 'Sonic Architect' },
    { id: 6, name: 'Groove Alchemist' },
    { id: 7, name: 'Cadence Connoisseur' },
    { id: 8, name: 'Beat Artisan' },
    { id: 9, name: 'Harmony Virtuoso' },
    { id: 10, name: 'Mood Composer' },
  ];
  

  const featuredAlbum = { title: 'Featured Album', artist: 'Featured Artist' };

  return (
    <div className="bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 rythmastic_bg_2 text-white font-sans min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-8">Welcome to Your Music Platform</h1>

        {/* Featured Album */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Featured Album</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{featuredAlbum.title}</h3>
            <p className="text-gray-300">{`by ${featuredAlbum.artist}`}</p>
          </div>
        </div>

        {/* Trending Songs */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Trending Songs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingSongs.map((song) => (
              <div
                key={song.id}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{song.title}</h3>
                <p className="text-gray-300">{`by ${song.artist}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Artists */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Recommended Artists</h2>
          <div className="flex space-x-4">
            {recommendedArtists.map((artist) => (
              <div
                key={artist.id}
                className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition"
              >
                <p className="text-xl font-semibold">{artist.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Playlists */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{playlist.title}</h3>
                <p className="text-gray-300">{playlist.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlatformMainPage;
