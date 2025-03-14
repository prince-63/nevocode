import { defineDocumentType } from "contentlayer2/source-files";
import { computedFieldsConfig } from "./computed-fields-config";
import { contentFieldsType } from "./content-fields-type";

const DESIGN_PATTERN = defineDocumentType(() => ({
  name: "DesignPattern",
  filePathPattern: "design-pattern/**/*.mdx",
  contentType: "mdx",
  fields: contentFieldsType,
  computedFields: computedFieldsConfig,
}));

export default DESIGN_PATTERN;