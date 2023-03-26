import Link from "next/link";
import { PostMetaData } from './PostMetaData/PostMetaData';



export const PostPreview: React.FC<{
  post: PostMetaData;
}> = ({ post }) => (<div className="prose-sm p-4 border border-slate-300 rounded-md shadow-md bg-white" key={post.slug}>
  <Link href={`/posts/${post.slug}`}>
    <h2 className="font-bold text-green-700 hover:underline ">{post.title}</h2>
  </Link>
  <p className="text-sm text-gray-400">{post.date}</p>
  <p className="text-slate-700">{post.subtitle}</p>
</div>);
