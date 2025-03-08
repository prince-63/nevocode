import Image from "@/assets/testmonials/testmonials.png";
import { StaticImageData } from "next/image";

export interface TestmonialType {
  name: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  linkedInUrl: string;
}

export const testmonialsList: TestmonialType[] = [
  {
    name: "Prince Kumar",
    subtitle: "Software Engineer",
    description:
      "CSExplore's structured approach helped me transition from a non-tech background to a successful software engineering career. The courses are comprehensive and practical.",
    image: Image,
    linkedInUrl: "https://linkedin.com/in/prince63",
  },
  {
    name: "Prince Kumar",
    subtitle: "Software Engineer",
    description:
      "CSExplore's structured approach helped me transition from a non-tech background to a successful software engineering career. The courses are comprehensive and practical.",
    image: Image,
    linkedInUrl: "https://linkedin.com/in/prince63",
  },
  {
    name: "Prince Kumar",
    subtitle: "Software Engineer",
    description:
      "CSExplore's structured approach helped me transition from a non-tech background to a successful software engineering career. The courses are comprehensive and practical.",
    image: Image,
    linkedInUrl: "https://linkedin.com/in/prince63",
  },
];
