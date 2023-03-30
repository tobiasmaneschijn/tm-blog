/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PostMetaData } from "./PostMetaData/PostMetaData";
import Image from "next/image";
export const PostPreview: React.FC<{
  post: PostMetaData;
}> = ({ post }) => {
  const href = `/posts/${post.slug}`;

  return (
    <Link href={href}>
      <div
        key={post.slug}
        className=" border-4  dark:border-black relative  border-white max-w-md mb-5 h-80  hover:invert focus:invert duration-200 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-t  bg-black dark:bg-white z-10"></div>
        <div className="p-5 relative h-full   flex flex-wrap flex-col justify-end z-20 ">
          <h5 className="dark:text-black text-white font-bold text-5xl tracking-tight pb-2">
            {post.title}
          </h5>
        </div>
      </div>
    </Link>
  );
};
