import { defineDocumentType } from "contentlayer2/source-files";
import { computedFieldsConfig } from "./computed-fields-config";
import { contentFieldsType } from "./content-fields-type";

const DBMS = defineDocumentType(() => ({
  name: "Dbms",
  filePathPattern: "dbms/**/*.mdx",
  contentType: "mdx",
  fields: contentFieldsType,
  computedFields: computedFieldsConfig,
}));

export default DBMS;