'use client'; // This is a client component so it can use useState
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import BeatTable from '../components/BeatTable';

export default function Beats() {
  const tracks = [
    {
      title: 'Burning',
      genre: 'aaa',
      bpm: 150,
      price: 15,
      src: '/tracks/Brulure90bpm.wav',
    },
    {
      title: 'Big bags',
      genre: 'bbb',
      bpm: 170,
      price: 20,
      src: '/tracks/bigbags132bpm.wav',
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const selectTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <>
      <div className="p-4 text-white">
        <h1 className="mb-4 text-3xl">Beats</h1>
        <div>
          <h2 className="mb-2 text-xl">Track List</h2>
          <BeatTable beats={tracks} selectTrack={selectTrack} currentTrack={currentTrack} />
          <ReactAudioPlayer src={currentTrack.src} autoPlay={false} controls className="w-full" />
          <p className="text-gray-500">Currently playing: {currentTrack.title}</p>
        </div>
      </div>
    </>
  );
}
