import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { limitTextLength } from "~/utils/limitText";

export default function FeaturedArticleCard({
  title = "",
  description,
  thumbnail = {},
  category,
  createdAt,
  slug,
  route = "#",
  postDate,
  _id,
}) {
  return (
    <article className="bg-grayLightest overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative w-full sm:h-64 lg:h-full overflow-hidden">
          <Image
            title={title}
            alt={thumbnail?.alt || title}
            src={thumbnail?.url}
            className="object-cover w-full md:h-full"
            priority
            height={200}
            width={300}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="bg-slate-50/10 backdrop-blur-sm  text-white px-4 py-2 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col gap-4 justify-center">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center space-x-6 text-sm text-gray">
            {/* <div className="flex items-center space-x-2">
              <FaClock className="w-4 h-4" />
              <span>5 min read</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{moment(postDate).format("MMMM D, YYYY")}</span>
            </div>
          </div>

          {/* Title */}
          <Link href={route || "#"}>
            <h2 className="text-lg font-bold lg:text-xl xl:text-2xl text-grayDark">
              {limitTextLength(title || "", 50)}
            </h2>
          </Link>

          {/* Description */}
          <p className="text-gray text-sm">
            {limitTextLength(description || "", 150)}
          </p>

          {/* Button */}
          <Link href={route || "#"}>
            <button className="primary-btn-sm">Read Full Article</button>
          </Link>
        </div>
      </div>
    </article>
  );
}
