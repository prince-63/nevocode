import {
  H1,
  H2,
  H3,
  H4,
  Lead,
  P,
  Large,
  Small,
  Muted,
  InlineCode,
  MultilineCode,
  List,
  Quote,
} from "@/components/ui/typography";

export default function Page() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Headings */}
      <H1>H1 - Main Page Title</H1>
      <H2>H2 - Section Heading</H2>
      <H3>H3 - Subheading</H3>
      <H4>H4 - Minor Heading</H4>

      {/* Text Variations */}
      <Lead>
        Lead - This paragraph stands out as an introduction or important text.
      </Lead>
      <P>
        P - This is a standard paragraph with proper spacing. It helps keep
        content readable.
      </P>
      <Large>Large - This text is emphasized and stands out.</Large>
      <Small>Small - This text is smaller, often used for captions.</Small>
      <Muted>Muted - This text is faded, used for secondary information.</Muted>

      {/* Code Snippets */}
      <P>
        Example of <InlineCode>inline code</InlineCode> within a paragraph.
      </P>
      <MultilineCode>
        {`const greet = () => {
  console.log("Hello, World!");
};`}
      </MultilineCode>

      {/* Lists */}
      <List>
        <li>Reusable components</li>
        <li>Improved maintainability</li>
        <li>Consistent design</li>
      </List>

      {/* Quote */}
      <Quote>&quot;Consistency is key in design.&quot; - Anonymous</Quote>
    </div>
  );
}
