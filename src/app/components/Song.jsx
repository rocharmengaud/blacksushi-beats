'use client';

export default function Song({ currentSong }) {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <img
        src={currentSong.cover}
        alt={currentSong.name}
        style={{
          boxShadow: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
        }}
        className="w-[80%] sm:w-[35%] rounded-3xl shadow-[0_20px_100px_-20px] shadow-white"
      />
      <h2 className="px-1 pt-10 pb-3 text-xl">{currentSong.name}</h2>
      <h3 className="text-sm">{currentSong.artist}</h3>
    </div>
  );
}
