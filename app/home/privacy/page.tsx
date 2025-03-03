import { H2, H4, List, Muted, P } from "@/components/ui/typography";
import { lilita_one } from "@/utils/general/fonts";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <H2 className={`${lilita_one.className} text-primary mb-8 text-center`}>
        Privacy Policy
      </H2>
      <div className="prose max-w-none">
        <P className="font-medium mb-1">
          Last updated: {new Date().toLocaleDateString()}
        </P>
        <P>
          CSExplore (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website or use our services.
        </P>
        <H4 className="my-1">Information We Collect</H4>
        <P>
          We collect information that you provide directly to us, such as when
          you create an account, enroll in a course, or contact us for support.
          This may include:
        </P>
        <List>
          <li>Name</li>
          <li>Email address</li>
          <li>Payment information</li>
          <li>Course progress and completion data</li>
        </List>
        <H4 className="my-1">How We Use Your Information</H4>
        <P>We use the information we collect to:</P>
        <List>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Analyze usage patterns and improve our website and services</li>
        </List>
        <H4 className="my-1">Data Security</H4>
        <P>
          We implement appropriate technical and organizational measures to
          protect the security of your personal information. However, please
          note that no method of transmission over the Internet or electronic
          storage is 100% secure.
        </P>
        <H4 className="my-1">Changes to This Privacy Policy</H4>
        <P>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Last updated&quot; date.
        </P>
        <H4 className="my-1">Contact Us</H4>
        <P>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <Muted className="text-md text-primary dark:text-primary">
            privacy@csexplore.com
          </Muted>
          .
        </P>
      </div>
    </main>
  );
}
