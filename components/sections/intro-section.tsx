import { pt_sans } from "@/utils/general/fonts";
import { H1, Lead, P } from "../ui/typography";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="mx-8 my-12 sm:my-24 sm:mx-16 md:mx-32 md:my-28">
        <H1
          className={`${pt_sans.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          Hello World!
        </H1>
        <Lead className={`${pt_sans.className} py-2`}>
          I spent countless hours watching tutorials, only to realize I still
          couldn’t apply what I learned. Frustrated and on the verge of giving
          up, I knew something had to change.
        </Lead>
        <P className={`${pt_sans.className} text-lg py-2`}>
          That’s why I built nevocode.com—a place for clear, practical guides on
          system design, design patterns, DSA, DBMS, OS, and software
          engineering best practices. No fluff, just real knowledge you can
          apply.
        </P>
        <P className={`${pt_sans.className} text-lg py-2`}>
          <span className="text-green-600">Productivity is everything</span>
          —when you learn effectively, your growth multiplies.
        </P>

        <P className={`${pt_sans.className} text-lg py-2`}>
          Let’s learn, build, and grow together.
        </P>
      </div>
    </section>
  );
};

export default IntroSection;
