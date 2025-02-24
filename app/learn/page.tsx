import { allDocs } from "@/.contentlayer/generated";
import PostCard from "@/components/postcard";
import CodeBlock from "@/components/mdx/code-block";
import Quiz from "@/components/mdx/quiz";

export default function Home() {
  const posts = allDocs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <CodeBlock language="c">
        {
          `#include <stdio.h>

int main() {
    int fuel = 10;
    if (fuel > 5) {
        printf("Enough fuel, let's keep driving!");
    }
    return 0;
}`
        }
      </CodeBlock>


      <Quiz
        question="Who developed the C programming language?"
        options={{
          a: "Guido van Rossum",
          b: "Dennis Ritchie",
          c: "Bjarne Stroustrup",
          d: "James Gosling",
        }}
        answer="b"
      />

      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
