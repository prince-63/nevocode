import {
  CompanyType,
  LegalType,
  PlatformLinkType,
  ResourcesType,
} from "@/utils/types";

export const platformLinkList: PlatformLinkType[] = [
  {
    name: "Guides",
    href: "/home/guides",
  },
  {
    name: "Topics",
    href: "/home/topics",
  },
];

export const resourcesList: ResourcesType[] = [
  {
    name: "DBMS",
    href: "/learn/dbms/01-introduction-to-dbms",
  },
  {
    name: "C Programming",
    href: "/learn/c/01-introduction",
  },
];

export const companyList: CompanyType[] = [
  {
    name: "About",
    href: "/home/about",
  },
  {
    name: "Careers",
    href: "/home/careers",
  },
  {
    name: "Contact",
    href: "/home/contact",
  },
];

export const LegalList: LegalType[] = [
  {
    name: "Privacy Policy",
    href: "/home/privacy",
  },
  {
    name: "Terms of Service",
    href: "/home/terms",
  },
  {
    name: "Cookie Policy",
    href: "/home/cookie",
  },
];
