import React from 'react';

export const UnderButton = () => {
  return (
    <div className="absolute bottom-10">
      <div className="animate-bounce grid h-10 w-10 md:h-12 md:w-12 cursor-pointer place-items-center rounded-full border-2 border-slate-50 text-slate-100 hover:drop-shadow-xl">
        ▼
      </div>
    </div>
  );
};
