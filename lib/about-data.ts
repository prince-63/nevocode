import { Award, Globe, LucideIcon, User } from "lucide-react";

export interface OurImpactType {
  icon: LucideIcon;
  value: string;
  title: string;
  subtitle: string;
}

export interface OurValueType {
  title: string;
  description: string;
}

export const ourImpactData: OurImpactType[] = [
  {
    icon: User,
    value: "1,000+",
    title: "Registered Users",
    subtitle: "and growing",
  },
  {
    icon: Award,
    value: "10+",
    title: "Guides Offered",
    subtitle: "and growing",
  },
  {
    icon: Globe,
    value: "10,000+",
    title: "Page Visits",
    subtitle: "monthly",
  },
];

export const ourValueData: OurValueType[] = [
  {
    title: "Accessibility",
    description:
      " We strive to make our courses available to learners from all backgrounds and skill levels.",
  },
  {
    title: "Quality",
    description:
      " We are committed to delivering the highest standard of education through rigorous curriculum development.",
  },
  {
    title: "Innovation",
    description:
      "We continuously adapt our teaching methods and content to keep pace with the rapidly evolving tech industry.",
  },
  {
    title: "Community",
    description:
      "We foster a supportive learning environment where students can collaborate, share ideas, and grow together.",
  },
];
