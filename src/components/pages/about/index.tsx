import { UnderButton } from '@/components/common';
import Image from 'next/image';
import React from 'react';

export const About = () => {
  return (
    <div className="flex h-screen items-center bg-zinc-900">
      <div className="relative h-screen w-screen shadow-inner md:ml-20 md:h-3/4 md:w-[500px] lg:ml-36 lg:w-[700px]">
        <Image
          src={
            'https://res.cloudinary.com/dozkdbzkh/image/upload/v1702398774/portfolio/v9uoc41tjijj3wd17eln.jpg'
          }
          alt="Sohyeon Profile Image"
          className="object-cover opacity-40"
          fill
        />
      </div>
      <div className="fixed h-3/4 w-1/3 text-slate-50 md:relative md:-left-10">
        <h2>매일 새롭게 발전하는 개발자 이소현입니다</h2>
      </div>
      <UnderButton />
    </div>
  );
};
