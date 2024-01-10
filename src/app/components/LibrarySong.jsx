'use client';

export default function LibrarySong({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs, id }) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //active
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div onClick={songSelectHandler} className={`flex items-center py-1 px-2 hover:bg-gray-300 cursor-pointer ${song.active ? 'bg-gray-400' : ''}`}>
      <img src={song.cover} alt={song.name} className="w-[30%]"></img>
      <div className="pl-1">
        <h3 className="text-lg font-bold text-blue-500">{song.name}</h3>
        <h4 className="text-white text-[0.7rem] italic">{song.artist}</h4>
      </div>
    </div>
  );
}
