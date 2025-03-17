import Link from "../navigation/link";
import { Muted } from "../ui/typography";
import Logo from "../general/logo";
import { companyList, LegalList, resourcesList } from "@/data/footer-data";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center border-t py-6 md:py-12 bg-lightBg dark:bg-darkBg">
      <div className="w-full flex flex-col gap-6 px-4 md:flex-row md:items-center justify-around md:px-6">
        <div className="flex flex-col gap-2">
          <Logo />
          <Muted>Understand. Build. Succeed.</Muted>
          <Muted className="opacity-80">
            © 2025 - {new Date().getFullYear()} nevocode.com. All rights
            reserved.
          </Muted>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="space-y-3">
            <Muted>Resources</Muted>
            <ul className="space-y-2">
              {resourcesList.map((resource, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={resource.href}
                      prefetch={false}
                      className="dark:font-light text-gray-600 hover:text-green-700"
                    >
                      {resource.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-3">
            <Muted>Company</Muted>
            <ul className="space-y-2">
              {companyList.map((company, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={company.href}
                      prefetch={false}
                      className="dark:font-light text-gray-600 hover:text-green-700"
                    >
                      {company.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-3">
            <Muted>Legal</Muted>
            <ul className="space-y-2">
              {LegalList.map((legalItems, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={legalItems.href}
                      prefetch={false}
                      className="dark:font-light text-gray-600 hover:text-green-700"
                    >
                      {legalItems.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
