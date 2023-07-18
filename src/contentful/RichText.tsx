import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextProps = {
  document: RichTextDocument | null;
};

export default function RichText({ document }: RichTextProps) {
  if (!document) {
    return null;
  }
  console.log(documentToReactComponents(document));

  return <div className="postbody">{documentToReactComponents(document)}</div>;
}
