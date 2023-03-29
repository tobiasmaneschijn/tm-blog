import Link from "next/link";
import { PostMetaData } from "./PostMetaData/PostMetaData";

export const PostPreview: React.FC<{
  post: PostMetaData;
}> = ({ post }) => {
  const href = `/posts/${post.slug}`;

  return (
    <div className="max-w-lg mx-auto" key={post.slug}>
      <div className="bg-white dark:bg-slate-800 dark:border-slate-700 shadow-md border border-gray-200 rounded-lg max-w-md mb-5">
        <Link href={href}>
          <img
            className="rounded-t-lg"
            src={post.image}
            alt=""
          />
        </Link>
        <div className="p-5 flex flex-col">
          <Link href={href}>
            <h5 className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight mb-2">
              {post.title}
            </h5>
          </Link>
          <p className="font-normal text-gray-700 dark:text-slate-200 mb-3"> {post.subtitle} </p>
        
        </div>
      </div>
    </div>
  );
};
