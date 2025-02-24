import { allDocs } from "@/.contentlayer/generated";

export const fetchDoc = async (filename: string) => {
  const file = allDocs.find(
    (item) => item._raw.flattenedPath === `doc/${filename}`,
  );

  return file;
};
