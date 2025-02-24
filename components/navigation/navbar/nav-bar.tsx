"use client";

import Logo from "@/components/common/logo";
import { NavLinks } from "./nav-links";
import Link from "next/link";
import { Divider, Typography } from "@mui/material";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="w-full flex items-center justify-between px-5">
      {/* FEAT: LOGO */}
      <div className="bg-red-200 p-2">
        <Logo />
      </div>
      {/* FEAT: NAV LINKS */}
      <div className="hidden sm:flex gap-6 items-center">
        {NavLinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <Typography variant="body2">{link.label}</Typography>
            </Link>
          );
        })}
      </div>
      {/* FEAT: mobile nav */}
      <div className="visible sm:hidden">
        <div
          className="p-1 hover:bg-gray-50 hover:cursor-pointer  rounded-md"
          onClick={toggleDrawer(true)}
        >
          <Menu size={24} />
        </div>
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
          <div className="w-[240px]">
            <div className="h-[55px] bg-slate-100 flex items-center justify-between px-4">
              <div>
                <Logo />
              </div>
              <div
                onClick={toggleDrawer(false)}
                className="p-1 hover:bg-gray-50 hover:cursor-pointer  rounded-md"
              >
                <X size={24} />
              </div>
            </div>
            <Divider />
            <div className="w-full flex flex-col gap-4 px-4 pt-4">
              {NavLinks.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => {
                      const timeoutId = setTimeout(() => {
                        setOpen(false);
                        clearTimeout(timeoutId);
                      }, 100);
                    }}
                  >
                    <Typography variant="body2">{link.label}</Typography>
                  </Link>
                );
              })}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
