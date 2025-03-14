import { defineDocumentType } from "contentlayer2/source-files";
import { computedFieldsConfig } from "./computed-fields-config";
import { contentFieldsType } from "./content-fields-type";

const CLEAN_CODE = defineDocumentType(() => ({
  name: "CleanCode",
  filePathPattern: "clean-code/**/*.mdx",
  contentType: "mdx",
  fields: contentFieldsType,
  computedFields: computedFieldsConfig,
}));

export default CLEAN_CODE;