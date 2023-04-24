import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPostBySlug, Post } from "@/lib/posts";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blogPost, setBlogPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      const post = getPostBySlug(slug);
      if (post) {
        setBlogPost(post);
      }
    }
  }, [slug]);

  if (router.isFallback || !blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
      {/* Render other blog post data as needed */}
    </div>
  );
};

export default BlogPost;
