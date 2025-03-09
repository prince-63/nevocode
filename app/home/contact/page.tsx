"use client";

import IconButton from "@/components/general/icon-button";
import LabelInput from "@/components/general/label-input";
import { Button } from "@/components/ui/button";
import { H3, H4, Lead, Muted, Small } from "@/components/ui/typography";
import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { FormEvent, useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("name"));
  }
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col items-center py-8">
          <H3 className={` text-primary text-center mb-1`}>Get in Touch</H3>
          <Small>We&apos;d love to hear from you</Small>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="border border-gray-200 hover:border-primary rounded-lg hover:shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="p-8">
                <H4 className="mb-6">Contact Information</H4>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="mr-4" />
                    <div>
                      <Lead>Email</Lead>
                      <Muted>hello@systemnode.dev</Muted>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="mr-4" />
                    <div>
                      <Lead>Phone</Lead>
                      <Muted> +91 6289296197</Muted>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="mr-4" />
                    <div>
                      <Lead>Address</Lead>
                      <Muted>
                        {" "}
                        3CHJ+95J
                        <br />
                        Harsa toli, Mirachak, Bihar 841240
                      </Muted>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <H4 className="mb-6">Connect With Us</H4>
                  <div className="flex space-x-4">
                    <IconButton>
                      <Linkedin />
                    </IconButton>
                    <IconButton>
                      <Twitter />
                    </IconButton>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8">
                <H4 className="mb-6">Send us a message</H4>

                <form ref={ref} className="space-y-4" onSubmit={handleSubmit}>
                  <LabelInput
                    labelText="Name"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                  <LabelInput
                    labelText="Email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                  <LabelInput
                    labelText="Subject"
                    name="subject"
                    id="subject"
                    placeholder="How can we help?"
                  />
                  <LabelInput
                    labelText="Message"
                    name="subject"
                    id="subject"
                    placeholder="How can we help?"
                    textarea={true}
                  />
                  <Button type="submit">
                    <Send />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
