import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostsMetadata } from "@/components/getPostsMetadata";
import PageWrapper from "@/components/PageWrapper";
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
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const post = getPostContent(slug);
  return (
    <PageWrapper>
      <div className="">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 ">{post.data.title}</h1>
        <p className="text-gray-500">{post.data.date}</p>
        <article className="prose prose-slate dark:prose-invert  lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </PageWrapper>
  );
};

export default PostPage;
