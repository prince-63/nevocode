import Link from "@/components/navigation/link";
import { Award, Globe, Users } from "lucide-react";

export default function Page() {
  return (
    <main className="flex-1">
      {/* About Header */}
      <section className="bg-[#102020] text-[#F5F5F5] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-4 text-center">
            About CSExplore
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Making computer science education accessible to everyone, regardless
            of background or experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1F2937]">
                Our Story
              </h2>
              <p className="text-[#1F2937] mb-4">
                CSExplore was founded in 2020 with a simple mission: to make
                high-quality computer science education accessible to everyone.
                We believe that understanding computer science is crucial in
                today&apos;s digital world.
              </p>
              <p className="text-[#1F2937]">
                Our team consists of passionate educators and experienced
                software engineers who work together to create engaging,
                practical, and up-to-date learning experiences.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-10 w-10 text-[#388E3C] mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1 text-[#1F2937]">
                50,000+
              </h3>
              <p className="text-[#1F2937]">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-10 w-10 text-[#388E3C] mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1 text-[#1F2937]">200+</h3>
              <p className="text-[#1F2937]">Courses Offered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Globe className="h-10 w-10 text-[#388E3C] mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-1 text-[#1F2937]">100+</h3>
              <p className="text-[#1F2937]">Countries Reached</p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#1F2937]">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#388E3C]">
                <h3 className="font-semibold mb-2 text-[#1F2937]">
                  Accessibility
                </h3>
                <p className="text-[#1F2937]">
                  We strive to make our courses available to learners from all
                  backgrounds and skill levels.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#388E3C]">
                <h3 className="font-semibold mb-2 text-[#1F2937]">Quality</h3>
                <p className="text-[#1F2937]">
                  We are committed to delivering the highest standard of
                  education through rigorous curriculum development.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#388E3C]">
                <h3 className="font-semibold mb-2 text-[#1F2937]">
                  Innovation
                </h3>
                <p className="text-[#1F2937]">
                  We continuously adapt our teaching methods and content to keep
                  pace with the rapidly evolving tech industry.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#388E3C]">
                <h3 className="font-semibold mb-2 text-[#1F2937]">Community</h3>
                <p className="text-[#1F2937]">
                  We foster a supportive learning environment where students can
                  collaborate, share ideas, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
      </section>
    </main>
  );
}
