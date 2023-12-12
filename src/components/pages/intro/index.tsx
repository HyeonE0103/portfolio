import { UnderButton } from '@/components/common';
import React from 'react';

export const Intro = () => {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-b from-black via-gray-950 to-stone-700 text-slate-50">
      <div className="grid place-items-center gap-10">
        <h1 className="text-7xl font-black drop-shadow-lg">
          FRONT-END DEVELOP
        </h1>
        <h3 className="text-5xl font-bold drop-shadow-lg">PORTFOLIO</h3>
      </div>
      <UnderButton />
    </div>
  );
};
