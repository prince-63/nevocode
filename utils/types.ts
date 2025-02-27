import { Doc, Programming } from "@/.contentlayer/generated"

export interface CourseTopicTypes {
    title: string,
    description: string,
    link: string
}

export interface CoursesContentTypes {
    title: string,
    name: string,
    docs: Doc[] | Programming[],
    slug: string
}