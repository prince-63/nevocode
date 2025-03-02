"use client";

import { karla } from "@/utils/general/fonts";
import { Terminal } from "lucide-react";

const Logo = () => {
  return (
    // <div className={`${lilita_one.className} `}>
    //   <Link href="/">
    //     <span className="text-2xl text-textLight dark:text-textDark">
    //       <span className="text-green-600">CS</span>
    //       Explore
    //     </span>
    //   </Link>
    // </div>
    <div className={`${karla.className} flex items-center gap-1`}>
      <Terminal className="h-5 w-5 text-primary" />
      <span className="text-lg font-bold">
        <span className="text-textLight dark:text-textDark">
          <span className="text-primary">CS</span>
          Explore
        </span>
      </span>
    </div>
  );
};

export default Logo;
