import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-100 h-[55px] w-full flex items-center justify-center text-center">
        <Typography variant="body2" className="text-gray-700">
          &copy; 2025 CSExplore. All rights reserved.
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
