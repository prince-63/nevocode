import {
  CompanyType,
  LegalType,
  PlatformLinkType,
  ResourcesType,
} from "@/utils/types";

export const platformLinkList: PlatformLinkType[] = [
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Learning Paths",
    href: "/learning-paths",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export const resourcesList: ResourcesType[] = [
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Tutorials",
    href: "/tutorials",
  },
  {
    name: "Documentation",
    href: "/documentation",
  },
];

export const companyList: CompanyType[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const LegalList: LegalType[] = [
  {
    name: "Privacy",
    href: "/home/privacy",
  },
  {
    name: "Terms",
    href: "/terms",
  },
  {
    name: "Cookie Policy",
    href: "cookie-policy",
  },
];
