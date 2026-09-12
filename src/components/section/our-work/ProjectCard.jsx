"use client";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title = "Project Title",
  desc = "Brief description about the project or service.",
  route = "#",
  thumbnail = "/assets/projects/dummy-project.jpeg",
}) => {
  return (
    <div className="group w-full flex flex-col gap-4   bg-white shadow-sm hover:shadow-xl hover:border-primaryLight ">
      {/* Image */}
      <div className="overflow-hidden  aspect-video relative">
        <Image
          priority={false}
          src={thumbnail}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 "
          alt={title}
          quality={60}
        />
      </div>

      <div className="px-4 pb-4">
        <h3 className="font-semibold text-black text-lg sm:text-xl tracking-wide">
        {title}
      </h3>

      {desc && (
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {desc}
        </p>
      )}

      <Link href={route} className="mt-2 w-fit relative inline-block text-primary text-sm font-medium transition-all">
        <span className="group-hover:underline group-hover:underline-offset-4">
          Read the Case Study
        </span>
      </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
