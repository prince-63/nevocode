import { DSASheetProblemType } from "@/utils/dsa-sheet-type";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { pt_sans } from "@/utils/general/fonts";
import Link from "../navigation/link";
import { ExternalLink } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import axios from "axios";
import { problemDifficultyColor } from "@/utils/general/problem-difficulty-color";

interface DSASheetTableDataProps {
  problem: DSASheetProblemType;
  index: number;
}

const DSASheetTableData = ({ problem, index }: DSASheetTableDataProps) => {
  const toggleStatus = async (id: string) => {
    const response = await axios.post(
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
    console.log("response: ", response);
  };

  return (
    <TableBody
      key={index}
      className="border-t border-gray-200 dark:border-green-100 dark:border-opacity-20"
    >
      <TableRow>
        <TableCell className={`${pt_sans.className}`}>
          <Checkbox checked={true} onClick={() => toggleStatus(problem.id)} />
        </TableCell>
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
