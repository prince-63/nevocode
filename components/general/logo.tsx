"use client";

import { lilita_one } from "@/utils/general/fonts";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={`${lilita_one.className} `}>
      <Link href="/">
        <span className="text-2xl text-textLight dark:text-textDark">
          <span className="text-green-600">CS</span>
          Explore
        </span>
      </Link>
    </div>
  );
};

export default Logo;
