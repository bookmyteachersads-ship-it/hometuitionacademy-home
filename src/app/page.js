import axios from "axios";
import HomeMain from "~/components/section/home";
import schema from "../../public/json-ld/home-schema.json";
import Script from "next/script";
export default async function Home() {
  const services = await getFeaturedServices();

  return (
    <>
      <Script
        id="home-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeMain featuredServices={services} />
    </>
  );
}

const getFeaturedServices = async () => {
  try {   
    const response = await axios({
      method: "GET",
      url: `${process.env.BACKEND_API_BASE_URL}/api/public/service/list?limit=16`,
    });
    console.log("response", response?.data?.data);
    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }
};
