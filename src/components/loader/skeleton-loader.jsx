export const BlogCardSkeleton = () => {
  return (
    <div className="w-full bg-grayLightest animate-pulse">
      <div className="w-full h-[200px] sm:h-[300px] bg-grayLight" />

      <div className="p-4 flex flex-col gap-3">
        <div className="w-[20%] rounded-md bg-grayLight  py-2.5" />
        <div className="w-full flex flex-col gap-1">
          <div className="w-[95%] rounded-md bg-grayLight  py-1.5" />
          <div className="w-[80%] rounded-md bg-grayLight  py-1.5" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="w-[50%] rounded-md bg-grayLight  py-1" />
          <div className="w-[80%] rounded-md bg-grayLight  py-1" />
          <div className="w-[90%] rounded-md bg-grayLight  py-1" />
          <div className="w-[67%] rounded-md bg-grayLight  py-1" />{" "}
          <div className="w-[50%] rounded-md bg-grayLight  py-1" />
          <div className="w-[67%] rounded-md bg-grayLight  py-1" />
          <div className="w-[50%] rounded-md bg-grayLight  py-1" />
        </div>

        <div className="flex flex-row gap-1 ">
          <div className="px-5 rounded-md bg-grayLight  py-2.5" />
          <div className="px-5 rounded-md bg-grayLight  py-2.5" />
          <div className="px-5 rounded-md bg-grayLight  py-2.5" />
        </div>
      </div>
    </div>
  );
};

export const FeaturedArticleSkeleton = () => {
  return (
    <article className=" bg-grayLightest overflow-hidden animate-pulse">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative w-full h-64 lg:h-full overflow-hidden bg-slate-200">
          {/* Category Badge */}
          <div className="absolute top-6 left-6 h-6 w-20 bg-slate-400/50 rounded-full" />
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col gap-4 justify-center">
          {/* Meta Info */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="h-4 w-28 bg-slate-200 rounded" />
          </div>

          {/* Title */}
          <div className="h-6 w-3/4 bg-slate-200 rounded" />
          <div className="h-6 w-1/2 bg-slate-200 rounded" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
            <div className="h-4 w-4/6 bg-slate-200 rounded" />
          </div>

          {/* Button */}
          <div className="h-10 w-32 bg-slate-200 rounded-lg" />
        </div>
      </div>
    </article>
  );
};
