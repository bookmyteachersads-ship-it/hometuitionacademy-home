import "./globals.css";
import AppLayout from "~/components/layouts/app-layout";
import { Urbanist } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReduxProvider } from "./redux-provider";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const urbanist = Urbanist({ subsets: ["latin"] });
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
const GTM_ID = process.env.GTM_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata = {
  title: "Home Tuition Academy",
  description:
    "Itsoftworld provides best web designing,  app development service, seo service, digital marketing, ios, android development service in Delhi. Call +91 7977757864",
  robots: {
    index: false,
    follow: false,
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  authors: [{ name: "Home Tuition Academy" }],

  openGraph: {
    type: "website",
    siteName: "Itsoftworld",
    title: "Web and App Development, SEO and Digital marketing Service",
    description:
      "Itsoftworld provides best web designing,  app development service, seo service, digital marketing, ios, android development service in Delhi. Call +91 7977757864",
    url: "https://www.Itsoftworld.com",
    images: [
      {
        url: "${SITE_URL}/og.jpg",
        alt: "Itsoftworld.com",
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        alt: "Itsoftworld.com",
        width: 1200,
        height: 675,
      },
    ],
  },
  keywords: [
    "Website Designing Company in Delhi",
    "Web Development Services in India",
    "SEO Services in New Delhi",
    "Top Digital Marketing Company in India",
    "Best Website Designing Company",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />

      <body className={urbanist?.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Toaster position="bottom-center" />
        <ReduxProvider>
          <AppLayout>{children}</AppLayout>
        </ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}
