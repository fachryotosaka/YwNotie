import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto text-[30px]">
    <div
      className={`${markdownStyles["markdown"]} text-[20px]`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
  );
}
