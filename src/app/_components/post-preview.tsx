import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-[30px] font-bold mb-3 leading-tight">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 md:mb-0 text-[15px]">
            <DateFormatter dateString={date} />
      </div>
      <p className="text-[17px] leading-relaxed mb-4 text-left">{excerpt}</p>
    </div>
  );
}
