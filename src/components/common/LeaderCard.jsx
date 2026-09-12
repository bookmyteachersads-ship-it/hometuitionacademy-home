import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeaderCard = ({
  position = 1,
  name = "",
  designation = "",
  voice = "",
  linkedin = "#",
  twitter = "#",
  avatar = "https://img.freepik.com/free-photo/three-people-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17264.jpg?t=st=1734947336~exp=1734950936~hmac=fe2ee7873b2c6d51687ef79db95932dbddde389194bf4ab90778710d7f308f42&w=1480",
}) => {
  const isLeft = position % 2 == 0;
  return (
    <div className={`w-full`}>
      <div className="w-full flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-center xl:gap-16">
        <div className="flex-center sm:hidden">
          <Image
            src={avatar}
            alt={name}
            height={300}
            width={300}
            quality={50}
            className="w-[40%] aspect-square rounded-full object-cover"
          />
        </div>

        {isLeft && (
          <div className="col-span-1 hidden sm:block">
            <Image
              src={avatar}
              alt={name}
              height={300}
              width={300}
              quality={50}
              className="w-full aspect-square rounded-full object-cover"
            />
          </div>
        )}

        <div className="w-full col-span-2 flex flex-col gap-3 text-center sm:text-start">
          <h2 className="font-semibold text-lg text-black capitalize">
            {name}
          </h2>
          <p className="font-medium text-grayDark text-sm">{designation}</p>
          <p className="font-medium text-black text-md">{voice}</p>

          <div className="w-full flex justify-center sm:justify-start flex-row gap-3">
            {linkedin && (
              <Link href={linkedin}>
                <div className="h-10 aspect-square flex-center bg-[#0077B5] text-white rounded-full text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </Link>
            )}
            {twitter && (
              <Link href={twitter}>
                <div className="h-10 aspect-square flex-center bg-black rounded-full text-white text-xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </div>

        {!isLeft && (
          <div className="col-span-1 hidden sm:block">
            <Image
              src="https://img.freepik.com/free-photo/three-people-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17264.jpg?t=st=1734947336~exp=1734950936~hmac=fe2ee7873b2c6d51687ef79db95932dbddde389194bf4ab90778710d7f308f42&w=1480"
              alt="image-alt"
              height={300}
              width={300}
              quality={50}
              className="w-full aspect-square rounded-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderCard;
