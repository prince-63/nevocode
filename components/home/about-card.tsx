"use client";

import { Typography } from "@mui/material";

interface AboutCardProps {
  text: string;
  icon: string;
  description: string;
}

const AboutCard = (props: AboutCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-50 p-6 rounded-xl shadow-sm border border-1 text-center w-64">
      <div className="w-10 h-10 flex items-center justify-center ">
        <Typography variant="h1" className="text-3xl">
          {props.icon}
        </Typography>
      </div>
      <Typography className="text-xl font-semibold text-gray-700 ">
        {props.text}
      </Typography>
      <Typography variant="body2" className="text-gray-700">
        {props.description}
      </Typography>
    </div>
  );
};

export default AboutCard;
