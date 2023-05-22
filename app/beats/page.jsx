'use client'; // This is a client component so it can use useState
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function Beats() {
  const tracks = [
    {
      title: 'Burning',
      src: '/tracks/Brulure90bpm.wav',
    },
    {
      title: 'Big bags',
      src: '/tracks/bigbags132bpm.wav',
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const selectTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="p-4 text-white bg-gray-900">
      <h1 className="mb-4 text-3xl">Beats</h1>
      <div>
        <h2 className="mb-2 text-xl">Track List</h2>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Choose a beat</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.src}>
                <td className="px-4 py-2">{track.title}</td>
                <td className="px-4 py-2">
                  <button onClick={() => selectTrack(track)} className="hover:text-red-700 focus:outline-none text-red-500 underline">
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactAudioPlayer src={currentTrack.src} autoPlay={false} controls className="w-full" />
        <p className="text-gray-500">Currently playing: {currentTrack.title}</p>
      </div>
    </div>
  );
}
