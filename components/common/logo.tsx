"use client";

import { lilita_one } from "@/utils/common/fonts";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={`${lilita_one.className} `}>
      <Link href="/">
        <span className="text-xl text-gray-700">
          <span className="text-green-600">CS</span>
          Explore
        </span>
      </Link>
    </div>
  );
};

export default Logo;
