export type Post = {
  title: string;
  description: string;
  content: string;
  date: string;
  slug: string;
};

export const posts: Post[] = [
  // {
  //   title: "Example Blog Post",
  //   description: "This is an example blog post.",
  //   content: "Lorem ipsum dolor sit amet...",
  //   date: "2023-04-01",
  //   slug: "example-blog-post",
  // },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
