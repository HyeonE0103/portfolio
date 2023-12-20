import Image from 'next/image';
import React from 'react';

export const Header = () => {
  const kind = ['INTRO', 'ABOUT', 'SKILL', 'PROJECT', 'CONTACT'];
  return (
    <div className="fixed z-50 flex h-14 w-screen items-center justify-between px-4 md:h-20 md:px-7">
      <div className='relative w-6 h-6 md:w-7 md:h-7'>
        <Image
          src={
            'https://res.cloudinary.com/dozkdbzkh/image/upload/v1701953368/portfolio/gy734g0aukkhrxvy7cax.png'
          }
          alt="logo"
          fill
        />
      </div>
      <ul className="flex gap-2 text-white md:gap-7">
        {kind.map((title, i) => (
          <li
            key={i}
            className="after:duration-250 relative cursor-pointer pb-1 text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full md:text-lg"
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
