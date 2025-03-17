"use client";

import { DSASheetProblemType } from "@/utils/dsa-sheet-type";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { pt_sans } from "@/utils/general/fonts";
import Link from "../navigation/link";
import { ExternalLink } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const problemDifficultyColor: {
  [key in "Easy" | "Medium" | "Hard"]: string;
} = {
  Easy: "text-green-800 dark:text-green-400",
  Medium: "text-yellow-800 dark:text-yellow-400",
  Hard: "text-red-800 dark:text-red-400",
};

interface DSASheetTableDataProps {
  problem: DSASheetProblemType;
  statusList: string[];
  setStatusList: (statusList: string[]) => void;
}

const DSASheetTableData = ({
  problem,
  statusList,
  setStatusList,
}: DSASheetTableDataProps) => {
  const { status } = useSession();
  const router = useRouter();

  const toggleStatus = async (id: string) => {
    const updatedStatus = statusList.includes(id)
      ? statusList.filter((problemId) => problemId !== id)
      : [...statusList, id];

    setStatusList(updatedStatus);

    await axios.post(
      "/api/dsa-sheet",
      {
        problemId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    router.refresh();
  };

  return (
    <TableBody className="border-t border-gray-200 dark:border-green-100 dark:border-opacity-20">
      <TableRow>
        {status === "authenticated" && (
          <TableCell className={`${pt_sans.className}`}>
            <Checkbox
              checked={statusList.includes(problem.id)}
              onClick={() => toggleStatus(problem.id)}
            />
          </TableCell>
        )}
        <TableCell className={`${pt_sans.className}`}>{problem.name}</TableCell>
        <TableCell
          className={`${pt_sans.className} ${problemDifficultyColor[problem.difficultyLevel as "Easy" | "Medium" | "Hard"]}`}
        >
          {problem.difficultyLevel}
        </TableCell>
        <TableCell className={`${pt_sans.className} flex items-center pt-2.5`}>
          <Link href={problem.link} externalLink={true} className="inline-flex">
            <ExternalLink size={16} />
          </Link>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default DSASheetTableData;
