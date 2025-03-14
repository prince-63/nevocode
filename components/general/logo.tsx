import React from "react";
import { Terminal } from "lucide-react";
import { Lead } from "../ui/typography";
import { pt_sans } from "@/utils/general/fonts";
import Link from "../navigation/link";

const Logo = () => {
  return (
    <Link
      href="/home"
      className="flex items-center space-x-1 dark:hover:text-white hover:text-black"
    >
      <Terminal className="text-black opacity-85 dark:text-white" />
      <Lead
        className={`${pt_sans.className} font-bold text-black opacity-85 dark:text-white`}
      >
        NEVO CODE
      </Lead>
    </Link>
  );
};

export default Logo;
