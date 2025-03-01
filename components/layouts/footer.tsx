import { P } from "../ui/typography";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-100 h-[55px] w-full flex items-center justify-center text-center">
        <P className="text-gray-700">
          &copy; 2025 CSExplore. All rights reserved.
        </P>
      </footer>
    </>
  );
};

export default Footer;
