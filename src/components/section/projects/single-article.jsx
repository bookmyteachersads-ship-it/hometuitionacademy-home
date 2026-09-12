import Image from "next/image";
import { slugToReadableText } from "~/utils/generate-slug";
const SingleProjectArticle = ({ slug, category = "", singlePost = {} }) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: slugToReadableText(category), href: `/blog/${category}` },
    { label: slugToReadableText(slug), href: "#" },
  ];

  const {
    title,
    thumbnail = {},
    content,
    _id,
    description,
    // category,
  } = singlePost;

  return (
    <div className="w-full">
      <div className="w-full space-y-10  pb-16">
        <div className="w-full  px-5 xl:px-0 pb-10 xl:pb-24 rounded-bl-[10px] lg:rounded-b-[50px]  pt-[20%] sm:pt-[15%] xl:pt-[8%] bg-primaryLightest ">
          <div className="container grid lg:grid-cols-2 items-center gap-10">
            <div className="w-full flex flex-col gap-4 ">
              <div className="w-fit text-xs text-gray whitespace-nowrap">
                <span className="text-primary">CASE STUDY</span> | in{" "}
                {singlePost?.category?.name}
              </div>
              <h1 className="heading first-letter:capitalize">{title}</h1>
              <p className="text-sm text-gray first-letter:capitalize">
                {description}
              </p>
            </div>
            <Image
              src={thumbnail?.url}
              alt={thumbnail?.alt}
              title={thumbnail?.name}
              className="w-full aspect-video rounded-t-3xl md:rounded-lg md:rounded-tr-[50px]"
              height={200}
              width={400}
              priority
            />
          </div>
        </div>

        <div
          id="main-blog-container"
          className="w-full lg:w-[80%] xl:w-[45%] mx-auto flex flex-col gap-6  px-5 sm:px-10 lg:px-2"
        >
          <div
            dangerouslySetInnerHTML={{ __html: content || "" }}
            id="single-articale-details"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectArticle;
