'use client'; // This is a client component so it can use useState
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import BeatTable from '../components/BeatTable';
import useCart from '../hooks/useCart';
import { useSidebar } from '../hooks/useSidebar';

export default function Beats() {
  // const [cart, setCart] = useState([]);
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const addToCart = (beat) => {
  //   setCart([...cart, beat]);
  //   setSidebarOpen(true); // Open the sidebar when a beat is added to the cart
  // };

  // const removeFromCart = (beat) => {
  //   const updatedCart = cart.filter((item) => item.title !== beat.title);
  //   setCart(updatedCart);
  // };

  // const isInCart = (beat) => Boolean(cart.find((item) => item.title === beat.title));

  const state = useCart();
  const sidebar = useSidebar();

  const handleSidebarClose = () => {
    // setSidebarOpen(false);
    sidebar.onClose();
  };

  const handleSidebarOpen = () => {
    sidebar.onOpen();
  };

  const getButtonLabel = (beat) => {
    return state.isInCart(beat) ? 'Remove from cart' : 'Add to cart';
  };

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
      <div className="flex flex-col gap-4 p-4 text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">Beats</h1>
          <h2 className="text-xl">Track List</h2>
        </div>
        <div className="flex flex-col gap-4">
          <BeatTable
            beats={tracks}
            selectTrack={selectTrack}
            currentTrack={currentTrack}
            cart={state.items}
            addToCart={state.addToCart}
            removeFromCart={state.removeFromCart}
            isInCart={state.isInCart}
            getButtonLabel={getButtonLabel}
            handleSidebarClose={handleSidebarClose}
            sidebarOpen={sidebar.isOpen}
          />
          <ReactAudioPlayer src={currentTrack.src} autoPlay={false} controls className="w-full" />
          <p className="text-center text-gray-500">Currently playing: {currentTrack.title}</p>
        </div>
        {/* MX-AUTO SO THE BUTTON DOESN'T USE FULL CONTAINER WIDTH */}
        <button onClick={handleSidebarOpen} className="px-6 py-2 mx-auto text-white bg-yellow-300 rounded cursor-pointer">
          Check what is in your shopping cart
        </button>
      </div>
    </>
  );
}
