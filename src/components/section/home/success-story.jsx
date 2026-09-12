import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuccessStory = () => {
  return (
    <section className="w-full flex flex-col  gap-10 py-7 sm:py-10 px-5 sm:px-2">
      <h2 className="heading text-center">Success Spotlights</h2>

      <div className="w-full sm:w-[80%] xl:w-[60%] mx-auto flex flex-col items-center gap-5 ">
        <div className="w-full flex flex-col gap-2">
          <Image
            alt="blog-image-Itsoftworld"
            title="Blog 1"
            src="https://img.freepik.com/free-photo/training-achieve-objectives_1134-420.jpg?t=st=1732700314~exp=1732703914~hmac=35974ff04ebbc6261056f7c0927ca89d2df776f8bd8b6f7ec388cd14c0948b27&w=1800"
            className="aspect-video w-full "
            height={300}
            width={500}
          />

          <h3 className="font-bold text-black text-sm sm:text-md xl:text-lg">
            Reshaped Legacy Backend of Jewelry Website with Emerging Tech
          </h3>
        </div>

        <div className="w-fill grid sm:grid-cols-3 gap-4">
          <div className="w-full flex flex-col gap-2">
            <Image
              alt="blog-image-Itsoftworld"
              title="Blog 1"
              src="https://img.freepik.com/free-photo/training-achieve-objectives_1134-420.jpg?t=st=1732700314~exp=1732703914~hmac=35974ff04ebbc6261056f7c0927ca89d2df776f8bd8b6f7ec388cd14c0948b27&w=1800"
              className="aspect-video w-full "
              height={300}
              width={500}
            />

            <h3 className="font-semibold text-black text-sm ">
              Reshaped Legacy Backend of Jewelry Website with Emerging Tech
            </h3>
          </div>{" "}
          <div className="w-full flex flex-col gap-2">
            <Image
              alt="blog-image-Itsoftworld"
              title="Blog 1"
              src="https://img.freepik.com/free-photo/training-achieve-objectives_1134-420.jpg?t=st=1732700314~exp=1732703914~hmac=35974ff04ebbc6261056f7c0927ca89d2df776f8bd8b6f7ec388cd14c0948b27&w=1800"
              className="aspect-video w-full "
              height={300}
              width={500}
            />

            <h3 className="font-semibold text-black text-sm ">
              Reshaped Legacy Backend of Jewelry Website with Emerging Tech
            </h3>
          </div>{" "}
          <div className="w-full flex flex-col gap-2">
            <Image
              alt="blog-image-Itsoftworld"
              title="Blog 1"
              src="https://img.freepik.com/free-photo/training-achieve-objectives_1134-420.jpg?t=st=1732700314~exp=1732703914~hmac=35974ff04ebbc6261056f7c0927ca89d2df776f8bd8b6f7ec388cd14c0948b27&w=1800"
              className="aspect-video w-full "
              height={300}
              width={500}
            />

            <h3 className="font-semibold text-black text-sm ">
              Reshaped Legacy Backend of Jewelry Website with Emerging Tech
            </h3>
          </div>
        </div>

        <Link href="/contact-us" className="primary-btn-md w-fit  mt-5">
          View More Stories
        </Link>
      </div>
    </section>
  );
};

export default SuccessStory;
