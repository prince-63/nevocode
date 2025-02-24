"use client";
import NavBar from "./navbar/nav-bar";

const Header = () => {
  return (
    <div className="sticky top-0 z-30 w-full h-[55px] bg-slate-100 flex items-center justify-center">
      <NavBar />
    </div>
  );
};

export default Header;
