import { Suspense } from "react";
import { notFound } from "next/navigation";
import SingleArticle from "~/components/section/blog/single-article";
import { getSinglePost } from "~/utils/api";

async function getPostData(slug) {
  try {
    const singlePost = await getSinglePost(slug);
    if (!singlePost) {
      return null;
    }
    return singlePost;
  } catch (error) {
    console.error("Error fetching single post:", error);
    throw error;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const { slug } = resolvedParams;

  const post = await getPostData(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [
        {
          url: post?.thumbnail?.url,
          alt: post?.thumbnail?.alt,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },

    // for page
    details: post,
  };
}

export default async function SingleBlogPost({ params }) {
  const resolvedParams = await params;
  const data = await generateMetadata({ params });
  const { slug } = resolvedParams;
  const singlePost = data?.details;
  const category = singlePost?.category?.slug;

  if (!singlePost) {
    notFound();
  }

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SingleArticle
          singlePost={singlePost}
          category={category}
          slug={slug}
        />
      </Suspense>
    </main>
  );
}
