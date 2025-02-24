"use client";

import { Lilita_One } from "next/font/google";

const cormorant_garamond = Lilita_One({
  weight: "400",
  subsets: ["latin"]
});

const Logo = () => {
  return <div className={`${cormorant_garamond.className} `}>
    <span className="text-xl text-gray-800">
      <span className="text-green-600">CS</span>
      Explore
    </span>
  </div>;
};

export default Logo;
