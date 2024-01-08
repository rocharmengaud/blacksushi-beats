'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export default function Nav({ libraryStatus, setLibraryStatus }) {
  // console.log(libraryStatus);

  return (
    <nav className="flex items-center justify-around">
      <h1 className="sm:text-4xl text-3xl font-extrabold leading-none tracking-tight text-white">
        Blacksushi <br></br>
        <span className="text-blue-600">Beats</span>
      </h1>
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
        className="bg-transparent cursor-pointer border-white border-2 p-[0.8rem] transition-all duration-300 ease-in hover:bg-white hover:text-slate-400 z-10"
      >
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
