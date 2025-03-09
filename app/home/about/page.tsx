import { H3, Lead, P, Small } from "@/components/ui/typography";
import { ourImpactData, ourValueData } from "@/lib/about-data";

export default function Page() {
  return (
    <main className="container mx-auto px-4 mb-8">
      <section>
        <div className="mb-8">
          <H3 className="text-primary text-center py-8">Our Story</H3>
          <P>
            In 2025, System Node was born from a simple yet powerful idea, to make
            learning programming and system design clear, distraction-free, and
            deeply impactful. As aspiring developers ourselves, we saw students
            struggling, not just with what to learn, but also why it matters and
            how to apply it in the real world. The vast sea of information,
            combined with constant distractions, made focused learning
            incredibly hard. That&apos;s why we built System Node, a platform
            designed to cut through the noise and provide structured,
            no-nonsense explanations of programming, system design, and core
            computer science concepts. Our mission is to help students grow
            faster by making learning engaging, practical, and distraction-free.
          </P>
          <P className="mt-1">
            Behind System Node is a team of passionate, experienced, and highly
            productive minds, committed to creating the best possible learning
            experience. Whether you&apos;re a beginner or an advanced developer,
            we&apos;re here to simplify complex topics, provide real-world
            insights, and help you stay ahead in tech. Because learning should
            be simple. Growth should be unstoppable. And your journey in tech
            should be one without limits. 🚀
          </P>
        </div>

        {/* Stats */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {ourImpactData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="p-6 border rounded-lg border-gray-200 hover:border-primary text-center hover:shadow-md"
                >
                  <data.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <Lead>{data.value}</Lead>
                  <P>{data.title}</P>
                  <Small className="opacity-80 mt-1">{data.subtitle}</Small>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div>
          <H3 className="text-primary mb-4">Our Values</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ourValueData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="p-5 border rounded-lg border-gray-200 hover:border-primary hover:shadow-md"
                >
                  <Lead className="mb-2">{data.title}</Lead>
                  <P>{data.description}</P>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA
      <section className="py-10 bg-[#388E3C] text-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our community of learners and start exploring the exciting
            world of computer science.
          </p>
          <Link href="/courses">
            <button className="px-6 py-2 bg-[#F59E0B] text-[#1F2937] font-medium rounded-md hover:bg-opacity-90 transition-colors">
              Explore Courses
            </button>
          </Link>
        </div>
      </section> */}
    </main>
  );
}
