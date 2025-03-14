import { FieldDef } from "contentlayer2/source-files";

export const contentFieldsType: Record<string, FieldDef> = {
    guideId: {
        type: "string",
        required: true,
    },
    moduleId: {
        type: "string",
        required: true,
    },
    title: {
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    date: {
        type: "date",
        required: false,
    },
    author: {
        type: "string",
        required: true,
    },
    author_url: {
        type: "string",
        required: false,
    },
    published: {
        type: "boolean",
        default: true,
    }
}