import SingleService from "~/components/section/services/single-service";
import { Suspense } from "react";
import { getSingleService, getServiceList } from "~/utils/api";
import { replaceTemplateVars } from "~/utils/replaceTemplateVars";
import { notFound, redirect } from "next/navigation";

async function getServiceData(slugPath) {
  try {
    const singlePost = await getSingleService(slugPath);
    // Return null if empty object is returned (meaning not found)
    if (!singlePost || !singlePost.slug) return null;
    return singlePost;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const route = resolvedParams?.slug || [];
  const slugPath = route.join("/");

  const serviceDetails = await getServiceData(slugPath);

  if (!serviceDetails) {
    return {
      title: "Service Not Found 😕",
      description: "The requested service could not be found.",
    };
  }

  const title = serviceDetails.seoTitle || serviceDetails.heading;
  const description =
    serviceDetails.seoDescription || serviceDetails.description;
  const canonical = serviceDetails.canonical || "";

  return {
    title,
    description,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    details: serviceDetails,
  };
}

export default async function SingleServicePage({ params }) {
  const data = await generateMetadata({ params });
  const serviceDetails = data?.details;

  if (!serviceDetails) {
    notFound();
  }

  if (serviceDetails.isValid === false) {
    redirect(serviceDetails.redirectUrl || `/services/${serviceDetails.slug}`);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full">
        <SingleService
          subHeading={serviceDetails.subHeading}
          description={serviceDetails.description}
          heading={serviceDetails.heading}
          pre={serviceDetails.variables?.pre}
          post={serviceDetails.variables?.post}
          serviceDetails={serviceDetails || {}}
        />
      </main>
    </Suspense>
  );
}
