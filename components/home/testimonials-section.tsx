import { testmonialsList } from "@/lib/testmonial-data";
import Image from "next/image";
import { H1, H4, P } from "../ui/typography";
import { lilita_one } from "@/utils/general/fonts";

const TestimonialsSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full pt-12  py-2 sm:py-8 md:py-12 lg:py-16"
      id="testimonials"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <H1 className={`${lilita_one.className} text-primary text-center`}>
              What Our Learners Say
            </H1>
            <P>
              Hear from our community of learners who have transformed their
              careers with CSExplore.
            </P>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testmonialsList.map((testmonial, index) => {
            return (
              <div
                key={index}
                className="min-h-max flex flex-col rounded-lg border border-gray-200 hover:border-green-700 transition-all p-6"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testmonial.image}
                    width={50}
                    height={50}
                    alt={testmonial.name}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <H4 className="text-md font-bold opacity-95">
                      {testmonial.name}
                    </H4>
                    <P className="text-sm opacity-70">{testmonial.subtitle}</P>
                  </div>
                </div>
                <P className="opacity-80">{testmonial.description}</P>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
