import { UnderButton } from '@/components/common';
import Image from 'next/image';
import React from 'react';

export const About = () => {
  return (
    <div className="flex h-screen items-center bg-zinc-900 md:px-[10%]">
      <div className="relative h-screen w-screen md:h-3/4 md:w-[500px]">
        <Image
          src={
            'https://res.cloudinary.com/dozkdbzkh/image/upload/v1702398774/portfolio/v9uoc41tjijj3wd17eln.jpg'
          }
          alt="Sohyeon Profile Image"
          className="object-cover opacity-30"
          fill
        />
      </div>
      <div className="px-[15%] absolute flex flex-col gap-10 text-slate-50">
        <div className="flex flex-col justify-center gap-3">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            매일 새롭게 발전하는
          </h2>
          <h3 className="text-2xl font-medium md:text-3xl lg:text-4xl">
            프론트엔드 개발자 이소현입니다
          </h3>
        </div>
        <div className="flex flex-col gap-10 leading-loose">
          <div>
            <p>
              새로운 도전을 두려워하지 않고, 기술의 발전에 열린 마음으로
              접근하는 것을 즐기며, 저의 프론트엔드 개발 여정을 추구하는 것을
              즐겨합니다.
            </p>
            <p>
              코드 작성에 그치지 않고, 사용자의 경험을 개선하기 위해 지속적으로
              노력하는 것이 제 자세입니다.
            </p>
          </div>
          <div>
            <p>
              기술적 역량과 함께 소통과 협업 능력을 바탕으로 팀의 목표를 이루기
              위해 노력해왔습니다.
            </p>
            <p>
              프로젝트를 통해 사용자들에게 더 나은 서비스를 제공하는 것에 대한
              보람을 느끼고 있으며, 지속적인 성장을 추구하고 있습니다.
            </p>
          </div>
          <div>
            <p>
              저의 경험과 역량이 함께하는 프로젝트에서도 적극적인 역할을 해낼 수
              있을 것이라 자신합니다.
            </p>
            <p>
              사람들과 함께 협동하며 끊임없이 발전하고, 사용자들에게 가치 있는
              경험을 선사하기 위해 노력하는 것을 저의 목표로 삼고 있습니다.
            </p>
          </div>
        </div>
      </div>
      <UnderButton />
    </div>
  );
};
