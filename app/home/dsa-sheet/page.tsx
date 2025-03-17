"use client";

import { useEffect, useState } from "react";
import { Table } from "@/components/ui/table";
import { H3, Muted, P } from "@/components/ui/typography";
import { DSA_SHEET } from "@/data/dsa-sheet";
import { pt_sans } from "@/utils/general/fonts";
import DSASheetTableData from "@/components/general/dsa-sheet-table-data";
import DSASheetTableHeader from "@/components/general/dsa-sheet-table-header";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import axios from "axios";

export default function Page() {
  const [expandedTopics, setExpandedTopics] = useState<{
    [key: string]: boolean;
  }>({});
  const [statusList, setStatusList] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const getProblemStatus = async () => {
    const response = await axios.get("/api/dsa-sheet");
    setStatusList((data) => [...data, ...response.data.data]);
  };

  useEffect(() => {
    getProblemStatus();
  }, []);

  return (
    <section className="px-3 mb-8">
      <div className="py-5 md:py-8">
        <H3 className="text-primary text-center  mb-1">DSA Sheet</H3>
        <P className="text-center sm:mx-8 md:mx-16 lg:mx-28">
          A 250+ DSA problem set covering key algorithms and data structures
          from top platforms.
        </P>
      </div>
      <div className="sm:mx-4 md:mx-8 lg:mx-16 mt-4 prose border border-gray-200 dark:border-green-100 dark:border-opacity-20 rounded-md p-4">
        {DSA_SHEET.map((topic) => (
          <div
            key={topic.topicId}
            className="border border-gray-200 dark:border-green-100 dark:border-opacity-20 rounded-md my-1"
          >
            <div
              className="cursor-pointer flex justify-between items-center px-2 py-1.5"
              onClick={() => toggleTopic(topic.topicId)}
            >
              <Muted className={`${pt_sans.className}`}>
                {topic.topicName}
              </Muted>
              <Muted className="opacity-80">
                {expandedTopics[topic.topicId] ? (
                  <ChevronUpIcon />
                ) : (
                  <ChevronDownIcon />
                )}
              </Muted>
            </div>

            {expandedTopics[topic.topicId] && (
              <Table className="w-full">
                <DSASheetTableHeader />
                {topic.problems.map((problem) => (
                  <DSASheetTableData
                    key={problem.id}
                    problem={problem}
                    statusList={statusList}
                    setStatusList={setStatusList}
                  />
                ))}
              </Table>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
