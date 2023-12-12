import React from 'react';

export const UnderButton = () => {
  return (
    <div className="fixed bottom-20 left-1/2">
      <div className="animate-bounce grid h-12 w-12 cursor-pointer place-items-center rounded-full border-2 border-slate-50 text-slate-100 hover:drop-shadow-xl">
        ▼
      </div>
    </div>
  );
};
