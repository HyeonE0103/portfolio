import React from 'react';
import { SkillBox } from './skillBox';
import { CSKILLS, LSKILLS, RSKILLS } from '@/data/skills';
import { UnderButton } from '@/components/common';

export const Skill = () => {
  return (
    <div className="layout flex-col bg-gradient-to-b from-black via-gray-950 to-gray-900 p-5 pt-20 md:px-[5%] md:pt-32">
      <div className="animate-fadein grid place-items-center text-slate-50">
        <h2 className="text-4xl font-bold md:text-5xl">Skills</h2>
      </div>
      <div className="flex flex-1 flex-col justify-evenly">
        <div className="animate-fadein flex translate-y-0 flex-col gap-5 opacity-100 md:grid md:grid-cols-3">
          {LSKILLS.map((x, i) => (
            <SkillBox
              key={i}
              image={x.image}
              title={x.title}
              content={x.content}
            />
          ))}
        </div>
        <div className="animate-fadein flex flex-col gap-5 md:grid md:grid-cols-3">
          {RSKILLS.map((x, i) => (
            <SkillBox
              key={i}
              image={x.image}
              title={x.title}
              content={x.content}
            />
          ))}
        </div>
        <div className="animate-fadein flex flex-col gap-5 md:grid md:grid-cols-3">
          {CSKILLS.map((x, i) => (
            <SkillBox
              key={i}
              image={x.image}
              title={x.title}
              content={x.content}
            />
          ))}
        </div>
      </div>
      <UnderButton />
    </div>
  );
};
