import fs from "fs";
import matter from "gray-matter";
import { PostMetaData } from "@/components/PostMetaData/PostMetaData";

export const getPostsMetadata = (): PostMetaData[] => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((fn) => fn.endsWith(".md"));

  const posts = markdownPosts.map((post) => {
    const fileContents = fs.readFileSync(`${folder}${post}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      image: matterResult.data.image,
      author: matterResult.data.author,
      slug: post.replace(".md", ""),
    };
  });
  return posts;
};
