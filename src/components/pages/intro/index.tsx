import { UnderButton } from '@/components/common';
import React from 'react';

export const Intro = () => {
  return (
    <div className="layout bg-gradient-to-b from-black via-gray-950 to-stone-700 text-white">
      <div className="font-anton grid place-items-center">
        <h1 className="animate-fadein2 text-5xl text-white opacity-90 md:text-8xl lg:text-9xl">
          FRONT-END DEVELOP
        </h1>
        <h3 className="animate-fadein relative -top-4 text-4xl font-bold drop-shadow-lg md:text-7xl lg:text-8xl">
          PORTFOLIO
        </h3>
      </div>
      <UnderButton />
    </div>
  );
};
