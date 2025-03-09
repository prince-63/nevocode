import Link from "../navigation/link";
import { Muted } from "../ui/typography";
import Logo from "../general/logo";
import {
  companyList,
  LegalList,
  platformLinkList,
  resourcesList,
} from "@/lib/footer-data";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-12 bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex flex-col gap-2">
          <Logo />
          <Muted>Master computer science at your own pace.</Muted>
          <Muted className="opacity-80">
            © {new Date().getFullYear()} System Node. All rights reserved.
          </Muted>
        </div>
        <div className="flex-1 md:flex md:justify-end">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Platform</h4>
              <ul className="space-y-2">
                {platformLinkList.map((platform, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={platform.href}
                        prefetch={false}
                        className="text-sm dark:font-light text-gray-600 hover:text-green-700"
                      >
                        {platform.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2">
                {resourcesList.map((resource, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={resource.href}
                        prefetch={false}
                        className="text-sm dark:font-light text-gray-600 hover:text-green-700"
                      >
                        {resource.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2">
                {companyList.map((company, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={company.href}
                        prefetch={false}
                        className="text-sm dark:font-light text-gray-600 hover:text-green-700"
                      >
                        {company.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2">
                {LegalList.map((legalItems, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={legalItems.href}
                        prefetch={false}
                        className="text-sm dark:font-light text-gray-600 hover:text-green-700"
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
      </div>
    </footer>
  );
};

export default Footer;
