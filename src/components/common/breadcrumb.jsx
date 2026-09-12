import Link from "next/link";
const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex overflow-x-auto hide-scrollbar w-full">
      {items?.map((item, index) => {
        const { href, label } = item;
        return (
          <div key={index} className="flex-shrink-0 flex items-center">
            <Link href={href}>
              <span
                className={`capitalize font-[500] text-[12px] sm:text-[14px]  ${
                  index !== items?.length - 1 ? "text-gray" : "text-primary"
                }`}
              >
                {label}
              </span>
            </Link>
            {index !== items?.length - 1 && (
              <span className="text-gray text-lg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
