"use client";

import { karla } from "@/utils/general/fonts";
import { Terminal } from "lucide-react";
import Link from "../navigation/link";

const Logo = () => {
  return (
    <div className={`${karla.className}`}>
      <Link href="/home" className="flex items-center gap-1">
        <Terminal className="h-5 w-5 text-primary" />
        <span className="text-lg font-bold">
          <span className="text-textLight dark:text-textDark">
            <span className="text-primary">CS</span>
            Explore
          </span>
        </span>
      </Link>
    </div>
  );
};

export default Logo;
