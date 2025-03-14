import { ComputedFields } from "contentlayer2/source-files";

export const computedFieldsConfig: ComputedFields = {
    url: {
        type: "string",
        resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};