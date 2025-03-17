import { defineDocumentType } from "contentlayer2/source-files";
import { computedFieldsConfig } from "./computed-fields-config";
import { contentFieldsType } from "./content-fields-type";

const OBJECT_ORIANTED_PROGRAMMING = defineDocumentType(() => ({
  name: "ObjectOrientedProgramming",
  filePathPattern: "object-oriented-programming/**/*.mdx",
  contentType: "mdx",
  fields: contentFieldsType,
  computedFields: computedFieldsConfig,
}));

export default OBJECT_ORIANTED_PROGRAMMING;