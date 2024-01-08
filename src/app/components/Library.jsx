'use client';

import LibrarySong from './LibrarySong';

export default function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, setLibraryStatus, libraryStatus }) {
  return (
    <div
      className={`fixed top-0 left-0 sm:w-[20rem] w-[100%] h-full overflow-scroll translate-x-[-100%] transition-all duration-500 bg-blue-300 opacity-0 ${
        libraryStatus ? 'translate-x-[0%] opacity-100' : ''
      }`}
    >
      <h2 className="border-b-blue-200 px-8 py-8 text-2xl font-bold text-blue-600 border-b-4">Library</h2>
      <div className="flex flex-col items-center px-2 py-10">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}
