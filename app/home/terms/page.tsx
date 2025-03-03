import { H2, H4, Muted, P } from "@/components/ui/typography";
import { lilita_one } from "@/utils/general/fonts";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <H2 className={`${lilita_one.className} text-primary mb-8 text-center`}>
        Terms of Service
      </H2>
      <div className="prose max-w-none">
        <P className="font-medium mb-1">
          Last updated: {new Date().toLocaleDateString()}
        </P>
        <P>
          Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of
          Service&quot;) carefully before using the CSExplore website (the
          &quot;Service&quot;) operated by CSExplore (&quot;us&quot;,
          &quot;we&quot;, or &quot;our&quot;).
        </P>
        <H4 className="my-1">1. Acceptance of Terms</H4>
        <P>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </P>
        <H4 className="my-1">2. Use of the Service</H4>
        <P>
          You agree to use the Service only for purposes that are permitted by
          these Terms and any applicable law, regulation, or generally accepted
          practices or guidelines in the relevant jurisdictions.
        </P>
        <H4 className="my-1">3. User Accounts</H4>
        <P>
          When you create an account with us, you must provide information that
          is accurate, complete, and current at all times. Failure to do so
          constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
        </P>
        <H4 className="my-1">4. Intellectual Property</H4>
        <P>
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of CSExplore and its licensors.
          The Service is protected by copyright, trademark, and other laws of
          both the United States and foreign countries.
        </P>
        <H4 className="my-1">5. Termination</H4>
        <P>
          We may terminate or suspend your account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms.
        </P>
        <H4 className="my-1">6. Limitation of Liability</H4>
        <P>
          In no event shall CSExplore, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from your access to or use of or
          inability to access or use the Service.
        </P>
        <H4 className="my-1">7. Changes</H4>
        <P>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. What constitutes a material change will be
          determined at our sole discretion.
        </P>
        <H4 className="my-1">8. Contact Us</H4>
        <P>
          If you have any questions about these Terms, please contact us at{" "}
          <Muted className="text-md text-primary dark:text-primary">
            terms@csexplore.com
          </Muted>
          .
        </P>
      </div>
    </main>
  );
}
