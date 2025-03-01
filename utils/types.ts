import { DocumentTypes } from "@/.contentlayer/generated";

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
  docs: DocumentTypes [];
  slug: string;
}