import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostsMetadata } from "@/components/getPostsMetadata";
type PostPageProps = {
  params: {
    slug: string;
  };
};

const getPostContent = (slug: string) => {
  const folder = "src/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map((post) => ({slug: post.slug}));
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const post = getPostContent(slug);
  return (
    <div className="">
      <h1 className="text-2xl text-green-800" >{post.data.title}</h1>
      <article className="prose prose-slate lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
