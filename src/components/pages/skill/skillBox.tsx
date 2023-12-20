import Image from 'next/image';
import React from 'react';

type skillBoxType = {
  image: string;
  title: string;
  content: string;
};

export const SkillBox = ({ image, title, content }: skillBoxType) => {
  return (
    <div className="gap-2 p-2 h-16 flex md:h-28 items-center overflow-hidden bg-slate-100 md:p-3 md:gap-3">
      <div className="relative h-8 w-8 flex-shrink-0 md:h-12 md:w-12">
        <Image src={image} alt="skill logo" fill />
      </div>
      <div>
        <div className="text-sm font-bold md:text-base">{title}</div>
        <div className="text-xs font-light md:text-sm ">{content}</div>
      </div>
    </div>
  );
};
