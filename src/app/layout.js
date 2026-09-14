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
  process.env.NEXT_PUBLIC_SITE_URL || "https://hometuitionacademy.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Home Tuition Academy | Best Home Tutors Near You",
    template: "%s | Home Tuition Academy",
  },

  description:
    "Find the best home tutors near you with Home Tuition Academy. Get experienced and verified home tutors for school students, CBSE, ICSE, and all subjects.",

  keywords: [
    "Home Tuition Academy",
    "Home Tutors Near Me",
    "Best Home Tutors",
    "Home Tuition Near Me",
    "Private Home Tutors",
    "Home Tutor in Delhi",
    "Home Tutor in Gurgaon",
    "Home Tutor in Noida",
    "CBSE Home Tuition",
    "ICSE Home Tuition",
    "Maths Home Tutor",
    "Science Home Tutor",
    "English Home Tutor",
  ],

  authors: [{ name: "Home Tuition Academy" }],

  creator: "Home Tuition Academy",
  publisher: "Home Tuition Academy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Home Tuition Academy",

    title: "Home Tuition Academy | Best Home Tutors Near You",

    description:
      "Find experienced and verified home tutors near you for all subjects and classes.",

    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 675,
        alt: "Home Tuition Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Tuition Academy | Best Home Tutors Near You",
    description:
      "Find experienced and verified home tutors near you for all subjects and classes.",

    images: [`${SITE_URL}/og.jpg`],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


/* =========================
   Floating CTA Component
========================= */

function FloatingCTA() {
  return (
    <>
      {/* Floating Action Buttons */}
      <div
        className="fixed bottom-6 right-5 z-[9999] flex flex-col gap-3"
        aria-label="Contact options"
      >

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917977757864"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.478-8.413" />
          </svg>
        </a>


        {/* Call Button */}
        <a
          href="tel:+917977757864"
          aria-label="Call Home Tuition Academy"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.78.62 2.63a2 2 0 01-.45 2.11L8 9.73a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0122 16.92z" />
          </svg>
        </a>


        {/* Email Button */}
        <a
          href="mailto:info@hometuitionacademy.com"
          aria-label="Email Home Tuition Academy"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
          </svg>
        </a>

      </div>
    </>
  );
}


/* =========================
   Root Layout
========================= */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

      <body className={urbanist.className}>

        {/* Google Tag Manager NoScript */}
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
          <AppLayout>
            {children}
          </AppLayout>
        </ReduxProvider>

        {/* Floating Call / WhatsApp / Email Buttons */}
        <FloatingCTA />

      </body>
    </html>
  );
}
