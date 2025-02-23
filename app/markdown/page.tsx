import Introduction from "@/docs/c-programming/introduction.mdx"
import MdxLayout from "@/components/mdx/mdx-layout"
import type { Metadata } from "next";
import { seo } from "@/docs/c-programming/introduction.mdx";

export const metadata : Metadata= seo; 

const MarkDown = () => {
    return (
        <MdxLayout>
            <Introduction />
        </MdxLayout>
    )
}

export default MarkDown;