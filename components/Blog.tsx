import React from "react";
import Link from "next/link";

type Props = { posts?: Post[] };

type Post = {
  title: string;
  description: string;
  content: string;
  date: string;
  slug: string;
};

function Blog({ posts = [] }: Props) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Blog
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Latest Posts
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-md text-gray-500">
                    {post.description}
                  </p>
                  <p className="mt-2 text-md text-gray-500">{post.date}</p>
                  <div className="mt-3">
                    <Link href={`/blog/${post.slug}`}>
                      <div>
                        <a className="text-indigo-600 hover:text-indigo-900 font-medium">
                          Read More &rarr;
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
