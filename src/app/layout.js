import "./globals.css";
import AppLayout from "~/components/layouts/app-layout";
import { Urbanist } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReduxProvider } from "./redux-provider";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";

const urbanist = Urbanist({ subsets: ["latin"] });

const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION;

const GTM_ID = process.env.GTM_ID;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://hometuitionacademy.com";


export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Home Tuition Academy | Find Trusted Home Tutors Near You",
    template: "%s | Home Tuition Academy",
  },

  description:
    "Home Tuition Academy helps students and parents find qualified home tutors and teachers near them for school subjects, competitive exams, and personalized learning.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },

  alternates: {
    canonical: SITE_URL,
  },

  authors: [
    {
      name: "Home Tuition Academy",
    },
  ],

  creator: "Home Tuition Academy",

  publisher: "Home Tuition Academy",

  openGraph: {
    type: "website",
    siteName: "Home Tuition Academy",

    title:
      "Home Tuition Academy | Find Trusted Home Tutors Near You",

    description:
      "Find qualified home tutors and teachers near you with Home Tuition Academy.",

    url: SITE_URL,

    locale: "en_IN",

    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        alt: "Home Tuition Academy - Find Home Tutors Near You",
        width: 1200,
        height: 675,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Home Tuition Academy | Find Trusted Home Tutors Near You",

    description:
      "Find qualified home tutors and teachers near you with Home Tuition Academy.",

    images: [`${SITE_URL}/og.jpg`],
  },

  keywords: [
    "Home Tuition Academy",
    "Home Tutors Near Me",
    "Teachers Near Me",
    "Private Home Tutors",
    "Best Home Tuition",
    "Home Tuition Services",
    "Qualified Home Teachers",
    "Home Tutor in India",
    "Online Home Tuition",
    "Personalized Learning",
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

      <body className={urbanist.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            />
          </noscript>
        )}

        <Toaster position="bottom-center" />

        <ReduxProvider>
          <AppLayout>{children}</AppLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
