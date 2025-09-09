import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://skt-lawsuit.vercel.app'),
  title: {
    default: "SKT 유심 정보 유출 집단소송 3차 모집 | 법률사무소 화음",
    template: "%s | 법률사무소 화음"
  },
  description: "SKT 유심 정보 유출 사건 피해자 집단소송 3차 모집. 착수금 1만원으로 손해배상 청구 가능. 과기정통부 고문 변호사가 직접 수행. 2025년 4월 유심사고 피해자라면 누구나 참여 가능.",
  keywords: ["SKT", "SK텔레콤", "유심", "USIM", "개인정보 유출", "집단소송", "손해배상", "법률사무소 화음", "변호사", "소송 참여", "착수금", "위자료", "개인정보보호법", "통신비밀보호법", "정보통신망법"],
  authors: [{ name: "법률사무소 화음" }],
  creator: "법률사무소 화음",
  publisher: "법률사무소 화음",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://skt-lawsuit.vercel.app",
    siteName: "SKT 유심 정보 유출 집단소송",
    title: "SKT 유심 정보 유출 집단소송 3차 모집 | 법률사무소 화음",
    description: "SKT 유심 정보 유출 사건 피해자 집단소송 3차 모집. 착수금 1만원으로 손해배상 청구 가능. 과기정통부 고문 변호사가 직접 수행.",
    images: [
      {
        url: "/og-social-image.jpg",
        width: 1200,
        height: 630,
        alt: "법률사무소 화음 사무실 - SKT 유심 정보 유출 집단소송",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hwaumlaw",
    creator: "@hwaumlaw",
    title: "SKT 유심 정보 유출 집단소송 3차 모집 | 법률사무소 화음",
    description: "SKT 유심 정보 유출 사건 피해자 집단소송 3차 모집. 착수금 1만원으로 손해배상 청구 가능.",
    images: ["/og-social-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
  alternates: {
    canonical: 'https://skt-lawsuit.vercel.app',
  },
  category: 'Legal Services',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href="/skt-hero-bg.jpg" as="image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#32408C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "법률사무소 화음",
              "description": "SKT 유심 정보 유출 집단소송 전문 법률사무소",
              "url": "https://skt-lawsuit.vercel.app",
              "logo": "https://skt-lawsuit.vercel.app/law-firm-logo.jpg",
              "image": "https://skt-lawsuit.vercel.app/og-social-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "논현로71길 10 써밋빌딩 4층",
                "addressLocality": "강남구",
                "addressRegion": "서울특별시",
                "postalCode": "06240",
                "addressCountry": "KR"
              },
              "telephone": "1577-6421",
              "email": "class@cello.bz",
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
              "sameAs": [
                "https://hwaumlaw.com"
              ],
              "offers": {
                "@type": "Offer",
                "name": "SKT 유심 정보 유출 집단소송 참여",
                "description": "착수금 1만원으로 SKT 유심 정보 유출 사건 집단소송 참여",
                "price": "10000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock",
                "validThrough": "2025-09-30"
              },
              "areaServed": {
                "@type": "Country",
                "name": "대한민국"
              },
              "serviceType": "집단소송",
              "provider": {
                "@type": "Organization",
                "name": "법률사무소 화음",
                "url": "https://hwaumlaw.com"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "SKT 유심 정보 유출 집단소송 3차 모집",
              "description": "SKT 유심 정보 유출 사건 피해자를 위한 집단소송 참여 모집",
              "startDate": "2025-01-01",
              "endDate": "2025-09-30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://skt-lawsuit.vercel.app"
              },
              "organizer": {
                "@type": "Organization",
                "name": "법률사무소 화음",
                "url": "https://hwaumlaw.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "10000",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock",
                "url": "https://docs.google.com/forms/d/e/1FAIpQLSeTd9yGOdt59W0wH19-8V0ULpmLwP1tB3qd1km-drXz9aH-kQ/viewform"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
