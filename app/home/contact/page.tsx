"use client";

import Link from "@/components/navigation/link";
import { H3, P, Small } from "@/components/ui/typography";
import { Twitter, PhoneIcon, MailIcon, LinkedinIcon } from "lucide-react";

export default function Page() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-2 sm:px-4 mb-8">
        <div className="flex flex-col items-center py-8">
          <H3 className="text-primary text-center mb-1">Get in Touch</H3>
          <Small>We&apos;d love to hear from you</Small>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <P className="text-center">
              Feel free to reach out to us for any inquiries, support, or
              collaborations!
            </P>
            <div className="flex items-center space-x-2">
              <MailIcon />
              <P>hello@nevocode.com</P>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon />
              <P>+91 6289296197</P>
            </div>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/nevocode" externalLink={true}>
                <Twitter />
              </Link>
              <Link
                href="https://linkedin.com/company/nevocode"
                externalLink={true}
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
