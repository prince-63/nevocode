export interface PlatformLinkType {
  name: string;
  href: string;
}

export interface ResourcesType {
  name: string;
  href: string;
}

export interface CompanyType {
  name: string;
  href: string;
}

export interface LegalType {
  name: string;
  href: string;
}

export const platformLinkList: PlatformLinkType[] = [
  {
    name: "Guides",
    href: "/home",
  },
  {
    name: "Topics",
    href: "/home",
  },
];

export const resourcesList: ResourcesType[] = [
  {
    name: "DBMS",
    href: "/learn/dbms/01-introduction-to-dbms",
  },
  // {
  //   name: "SQL",
  //   href: "sql/01-introduction-to-sql",
  // },
];

export const companyList: CompanyType[] = [
  {
    name: "About",
    href: "/home/about",
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
