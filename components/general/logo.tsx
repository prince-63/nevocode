import React from "react";
import { Terminal } from "lucide-react";
import { Lead } from "../ui/typography";
import Link from "../navigation/link";

const Logo = () => {
  return (
    <Link
      href="/home"
      className="flex items-center space-x-1 dark:hover:text-white hover:text-black"
    >
      <Terminal className="text-black opacity-85 dark:text-white w-5 h-5" />
      <Lead className={` font-extrabold text-black opacity-85 dark:text-white`}>
        DEVS
      </Lead>
    </Link>
  );
};

export default Logo;
