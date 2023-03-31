import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
import { getPostsMetadata } from "@/components/getPostsMetadata";
import { PostPreview } from "../components/PostPreview";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  const posts = getPostsMetadata();

  const postPreviews = posts.map((post) => {
    return (
      <PostPreview key={post.slug} post={post} />
    );
  });

  return  <PageWrapper><div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div></PageWrapper>;
}
