import { defineDocumentType } from "contentlayer2/source-files";
import { computedFieldsConfig } from "./computed-fields-config";
import { contentFieldsType } from "./content-fields-type";

const DATA_STRUCTURE = defineDocumentType(() => ({
  name: "DataStructure",
  filePathPattern: "data-structure/**/*.mdx",
  contentType: "mdx",
  fields: contentFieldsType,
  computedFields: computedFieldsConfig,
}));

export default DATA_STRUCTURE;