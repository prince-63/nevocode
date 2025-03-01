"use client";

import { H1, H2, P } from "../ui/typography";

interface AboutCardProps {
  text: string;
  icon: string;
  description: string;
}

const AboutCard = (props: AboutCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-50 p-6 rounded-xl shadow-sm border border-1 text-center w-64">
      <div className="w-10 h-10 flex items-center justify-center ">
        <H1 className="text-3xl">{props.icon}</H1>
      </div>
      <H2 className="text-xl font-semibold text-gray-700 ">{props.text}</H2>
      <P className="text-gray-700">{props.description}</P>
    </div>
  );
};

export default AboutCard;
