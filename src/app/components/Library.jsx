'use client';

import LibrarySong from './LibrarySong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
{
  /* <FontAwesomeIcon icon={faMusic} /> */
}

export default function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, setLibraryStatus, libraryStatus }) {
  return (
    // sliding library
    <div
      className={`fixed top-0 left-0 sm:w-[20rem] w-[80%] h-full overflow-scroll translate-x-[-100%] transition-all duration-500 bg-orange-200 opacity-0 ${
        libraryStatus ? 'translate-x-[0%] opacity-100' : ''
      }`}
    >
      <div className="border-b-orange-100 flex items-center justify-between px-8 py-8 border-b-8">
        <h2 className="text-2xl font-bold text-blue-600">Library</h2>
        <FontAwesomeIcon
          onClick={() => {
            setLibraryStatus(!libraryStatus);
          }}
          className=" hover:text-blue-100 text-orange-100 border-none cursor-pointer"
          icon={faTimes}
          size="2x"
        ></FontAwesomeIcon>
      </div>
      <div className="flex flex-col items-center px-2 py-8">
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
