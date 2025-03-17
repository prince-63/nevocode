import { pt_sans } from "@/utils/general/fonts";
import { TableHead, TableHeader, TableRow } from "../ui/table";

const DSASheetTableHeader = () => {
  return (
    <TableHeader className="border-y border-gray-200 dark:border-green-100 dark:border-opacity-20">
      <TableRow className="border-none">
        <TableHead className={`${pt_sans.className}`}>Status</TableHead>
        <TableHead className={`${pt_sans.className}`}>Problem Name</TableHead>
        <TableHead className={`${pt_sans.className}`}>Difficulty</TableHead>
        <TableHead className={`${pt_sans.className}`}>Link</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default DSASheetTableHeader;
