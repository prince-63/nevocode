import { H2, H4, List, Muted, P } from "@/components/ui/typography";
import { lilita_one } from "@/utils/general/fonts";

export default function Page() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <H2 className={`${lilita_one.className} text-primary mb-8 text-center`}>
        Terms of Service
      </H2>
      <div className="prose max-w-none">
        <P className="font-medium mb-1">
          Last updated: {new Date().toLocaleDateString()}
        </P>
        <P>
          This Cookie Policy explains how CSExplore (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
          technologies to recognize you when you visit our website. It explains
          what these technologies are and why we use them, as well as your
          rights to control our use of them.
        </P>
        <H4 className="my-1">What are cookies?</H4>
        <P>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </P>
        <H4 className="my-1"> Why do we use cookies?</H4>
        <P>
          We use first-party and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our website to
          operate, and we refer to these as &quot;essential&quot; or
          &quot;strictly necessary&quot; cookies. Other cookies enable us to
          track and target the interests of our users to enhance the experience
          on our website. Third parties serve cookies through our website for
          advertising, analytics, and other purposes.
        </P>
        <H4 className="my-1">Types of cookies we use</H4>
        <List>
          <li>
            <strong>Essential cookies:</strong> These cookies are strictly
            necessary to provide you with services available through our website
            and to use some of its features.
          </li>
          <li>
            <strong>Performance and functionality cookies:</strong> These
            cookies are used to enhance the performance and functionality of our
            website but are non-essential to their use.
          </li>
          <li>
            <strong>Analytics and customization cookies:</strong> These cookies
            collect information that is used either in aggregate form to help us
            understand how our website is being used or how effective our
            marketing campaigns are, or to help us customize our website for
            you.
          </li>
          <li>
            <strong>Advertising cookies:</strong> These cookies are used to make
            advertising messages more relevant to you. They perform functions
            like preventing the same ad from continuously reappearing, ensuring
            that ads are properly displayed for advertisers, and in some cases
            selecting advertisements that are based on your interests.
          </li>
        </List>
        <H4 className="my-1">How can you control cookies?</H4>
        <P>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          Cookie Consent Manager. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject. Essential
          cookies cannot be rejected as they are strictly necessary to provide
          you with services.
        </P>
        <P>
          You can also set or amend your web browser controls to accept or
          refuse cookies. If you choose to reject cookies, you may still use our
          website though your access to some functionality and areas of our
          website may be restricted.
        </P>
        <H4 className="my-1">Changes to this Cookie Policy</H4>
        <P>
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal or regulatory reasons. Please therefore re-visit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies.
        </P>
        <H4 className="my-1">Contact us</H4>
        <P>
          If you have any questions about our use of cookies or other
          technologies, please email us at{" "}
          <Muted className="text-md text-primary dark:text-primary">
            cookies@csexplore.com
          </Muted>
          .
        </P>
      </div>
    </main>
  );
}
