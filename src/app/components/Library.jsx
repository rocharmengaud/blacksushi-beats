'use client';

export default function Library({ songs, setCurrentSong, audioRef, isPlaying, setSongs, setLibraryStatus, libraryStatus }) {
  return (
    <div
      className={`fixed top-0 left-0 w-[20rem] h-full overflow-scroll translate-x-[-100%] transition-all duration-200 opacity-0 ${
        libraryStatus ? 'translate-x-[0%] opacity-100' : ''
      }`}
    >
      <h2 className="p-2">Library</h2>
      <div className="library-songs">test</div>
    </div>
  );
}
