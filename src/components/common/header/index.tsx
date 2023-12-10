import Image from 'next/image';
import React from 'react';

export const Header = () => {
  const kind = ['INTRO', 'ABOUT', 'SKILL', 'PROJECT', 'CONTACT'];
  return (
    <div className="fixed flex h-20 w-screen items-center justify-between px-7">
      <Image
        src={
          'https://res.cloudinary.com/dozkdbzkh/image/upload/v1701953368/portfolio/gy734g0aukkhrxvy7cax.png'
        }
        alt="logo"
        width={30}
        height={30}
      />
      <ul className="flex gap-7 text-slate-50">
        {kind.map((title, i) => (
          <li
            key={i}
            className="pb-1 text-lg after:duration-250 relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
