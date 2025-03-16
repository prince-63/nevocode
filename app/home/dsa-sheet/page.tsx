"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { H3, Muted } from "@/components/ui/typography";
import { DSA_SHEET } from "@/lib/dsa-sheet";
import { Link2 } from "lucide-react";
import Link from "@/components/navigation/link";
import { pt_sans } from "@/utils/general/fonts";

export default function Page() {
  const [expandedTopics, setExpandedTopics] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  return (
    <section className="container mx-auto px-4 mb-8">
      <H3 className="text-primary text-center mb-2 py-8">DSA Sheet</H3>
      <div className="sm:mx-16 mt-4 prose border dark:border-green-100 dark:border-opacity-20 rounded-md p-4">
        {DSA_SHEET.map((topic) => (
          <div
            key={topic.topicId}
            className="border border-textLigh/70 dark:border-textDark rounded-sm my-1"
          >
            <div
              className="cursor-pointer flex justify-between items-center p-1 rounded-sm border"
              onClick={() => toggleTopic(topic.topicId)}
            >
              <Muted className={`${pt_sans.className}`}>
                {topic.topicName}
              </Muted>
            </div>
            {expandedTopics[topic.topicId] && (
              <Table className="w-full">
                <TableHead className="px-0">
                  <TableRow className="grid grid-cols-2">
                    <TableCell className={`${pt_sans.className}`}>
                      Problem Name
                    </TableCell>
                    <div className="grid grid-cols-2">
                      <TableCell className={`${pt_sans.className}`}>
                        Difficulty Level
                      </TableCell>
                      <TableCell className={`${pt_sans.className}`}>
                        Problem Link
                      </TableCell>
                    </div>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topic.problems.map((problem) => (
                    <TableRow key={problem.id} className="grid grid-cols-2">
                      <TableCell className={`${pt_sans.className}`}>
                        {problem.name}
                      </TableCell>
                      <div className="grid grid-cols-2">
                        <TableCell className={`${pt_sans.className}`}>
                          {problem.difficultyLevel}
                        </TableCell>
                        <TableCell className={`${pt_sans.className}`}>
                          <Link
                            href={problem.link}
                            externalLink={true}
                            className="inline-flex"
                          >
                            <Link2 size={16} />
                          </Link>
                        </TableCell>
                      </div>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
