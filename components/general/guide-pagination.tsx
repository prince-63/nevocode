"use client";

import { GuideType } from "@/data/guides-data";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const GuidePagination = ({
  guide,
  contentIndex,
}: {
  guide: GuideType;
  contentIndex: number;
}) => {
  const prev = guide.docs[contentIndex - 1];
  const next = guide.docs[contentIndex + 1];
  const router = useRouter();

  function handleNavigate(url: string) {
    router.push(url);
  }

  return (
    <div className="flex flex-col justify-between my-4 mx-6 gap-4">
      {prev && (
        <Button
          size="lg"
          variant="outline"
          onClick={() => handleNavigate(`/learn${prev.url}`)}
        >
          <MoveLeft />
          {prev.title}{" "}
        </Button>
      )}
      {next && (
        <Button size="lg" onClick={() => handleNavigate(`/learn${next.url}`)}>
          {next.title} <MoveRight />
        </Button>
      )}
    </div>
  );
};

export default GuidePagination;
