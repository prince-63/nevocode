import { defineDocumentType } from "contentlayer2/source-files";
import { computedFieldsConfig } from "./computed-fields-config";
import { contentFieldsType } from "./content-fields-type";

const SQL = defineDocumentType(() => ({
  name: "Sql",
  filePathPattern: "sql/**/*.mdx",
  contentType: "mdx",
  fields: contentFieldsType,
  computedFields: computedFieldsConfig,
}));

export default SQL;