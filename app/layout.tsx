import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ozdurmushidrolik.com.tr"),

  title: {
    default:
      "Özdurmuş Hidrolik | Forklift, Havalı Kriko ve Transpalet Servisi",
    template: "%s | Özdurmuş Hidrolik",
  },

  description:
    "Özdurmuş Hidrolik; Gaziantep, Kahramanmaraş, Malatya, Şanlıurfa ve Adıyaman çevresinde forklift, havalı kriko, transpalet, hidrolik sistem tamiri, bakım ve teknik servis hizmeti sunar.",

  keywords: [
    "Özdurmuş Hidrolik",
    "hidrolik servis",
    "forklift servisi",
    "forklift tamiri",
    "havalı kriko tamiri",
    "havalı kriko servisi",
    "transpalet tamiri",
    "transpalet servisi",
    "hidrolik sistem tamiri",
    "hidrolik bakım",
    "Gaziantep hidrolik servis",
    "Gaziantep forklift servisi",
    "Gaziantep transpalet tamiri",
    "Gaziantep havalı kriko tamiri",
    "Kahramanmaraş hidrolik servis",
    "Maraş forklift servisi",
    "Kahramanmaraş forklift tamiri",
    "Malatya hidrolik servis",
    "Malatya forklift servisi",
    "Şanlıurfa hidrolik servis",
    "Urfa forklift tamiri",
    "Şanlıurfa transpalet tamiri",
    "Adıyaman hidrolik servis",
    "Adıyaman forklift servisi",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title:
      "Özdurmuş Hidrolik | Forklift, Havalı Kriko ve Transpalet Servisi",

    description:
      "Gaziantep, Kahramanmaraş, Malatya, Şanlıurfa ve Adıyaman çevresinde profesyonel hidrolik servis hizmeti.",

    url: "https://ozdurmushidrolik.com.tr",

    siteName: "Özdurmuş Hidrolik",

    locale: "tr_TR",

    type: "website",

    images: [
      {
        url: "/gorsel.jpg",
        width: 1200,
        height: 630,
        alt: "Özdurmuş Hidrolik",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Özdurmuş Hidrolik | Forklift ve Hidrolik Teknik Servis",

    description:
      "Forklift, havalı kriko ve transpalet servis çözümleri.",

    images: ["/gorsel.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Hidrolik Servis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f5f5] text-black">
        {children}
      </body>
    </html>
  );
}