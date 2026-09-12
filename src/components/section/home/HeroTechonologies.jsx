"use client";
import Image from "next/image";

const imageNames = [
  "Biology",
  "Chemistry",
  "Computer Science",
  "English",
  "Hindi",
  "Mathematics",
  "Physics",
  "Science"
 
];

// file names from Link (1).svg to Link (14).svg
const techImages = imageNames.map((label, i) => ({
  src: `/assets/hero-technologies/Link (${i + 1}).png`,
  label,
}));

const allImages = [...techImages, ...techImages];

const HeroTechnologies = () => {
  return (
    <div className="overflow-hidden w-full bg-white pt-10 container">
      <div className="scroll-wrapper">
        <div className="scroll-content  gap-3">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center  border border-whiteBlue px-3 rounded"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-contain z-0"
                />
              </div>
              <p className="text-xs text-center pb-2 font-medium">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .scroll-content {
          display: flex;
          width: max-content;
          animation: scrollX 20s linear infinite;
        }

        @keyframes scrollX {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroTechnologies;
