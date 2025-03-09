import { H3, Lead, Muted, P } from "@/components/ui/typography";

export default function Page() {
  return (
    <main className="container mx-auto px-4 mb-8">
      <H3 className={` text-primary text-center mb-2 py-8`}>
        Terms of Service
      </H3>
      <div className="prose border border-gray-200 dark:border-green-100 dark:border-opacity-20 rounded-md p-4">
        <P className="font-medium mb-1">
          Last updated: {new Date().toLocaleDateString()}
        </P>
        <P>
          Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of
          Service&quot;) carefully before using the System Node website (the
          &quot;Service&quot;) operated by System Node (&quot;us&quot;,
          &quot;we&quot;, or &quot;our&quot;).
        </P>
        <Lead className="my-1">1. Acceptance of Terms</Lead>
        <P>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </P>
        <Lead className="my-1">2. Use of the Service</Lead>
        <P>
          You agree to use the Service only for purposes that are permitted by
          these Terms and any applicable law, regulation, or generally accepted
          practices or guidelines in the relevant jurisdictions.
        </P>
        <Lead className="my-1">3. User Accounts</Lead>
        <P>
          When you create an account with us, you must provide information that
          is accurate, complete, and current at all times. Failure to do so
          constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
        </P>
        <Lead className="my-1">4. Intellectual Property</Lead>
        <P>
          The Service and its original content, features, and functionality are
          and will remain the exclusive property of System Node and its
          licensors. The Service is protected by copyright, trademark, and other
          laws of both the United States and foreign countries.
        </P>
        <Lead className="my-1">5. Termination</Lead>
        <P>
          We may terminate or suspend your account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms.
        </P>
        <Lead className="my-1">6. Limitation of Liability</Lead>
        <P>
          In no event shall System Node, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from your access to or use of or
          inability to access or use the Service.
        </P>
        <Lead className="my-1">7. Changes</Lead>
        <P>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. What constitutes a material change will be
          determined at our sole discretion.
        </P>
        <Lead className="my-1">8. Contact Us</Lead>
        <P>
          If you have any questions about these Terms, please contact us at{" "}
          <Muted className="text-md text-primary dark:text-primary">
            hello@systemnode.dev
          </Muted>
          .
        </P>
      </div>
    </main>
  );
}
