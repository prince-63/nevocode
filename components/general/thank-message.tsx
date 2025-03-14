import { pt_sans } from "@/utils/general/fonts";
import Link from "../navigation/link";
import { P } from "../ui/typography";

interface ThanksMessageProps {
  author: string;
  author_url: string;
}

const ThanksMessage: React.FC<ThanksMessageProps> = ({
  author,
  author_url,
}) => {
  return (
    <div className="flex items-center justify-center w-full h-[60px] px-4 my-2">
      <P className={`${pt_sans.className} text-wrap text-center`}>
        Special thanks to{" "}
        <Link href={author_url} externalLink={true}>
          {author}
        </Link>{" "}
        for contributing to this guide on Nevo Code.
      </P>
    </div>
  );
};

export default ThanksMessage;
