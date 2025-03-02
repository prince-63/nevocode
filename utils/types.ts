import { DocumentTypes } from "@/.contentlayer/generated";
import { StaticImageData } from "next/image";

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

export interface TestmonialType {
  name: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  linkedInUrl: string;
}

export interface NavLinkType {
  label: string;
  href: string;
}

export interface CourseTopicTypes {
  title: string;
  description: string;
  link: string;
}

export interface CoursesContentTypes {
  title: string;
  name: string;
  docs: DocumentTypes[];
  slug: string;
}
