import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://hsystem.vercel.app'),
  title: {
    default: '해태시스템 - AI·ESG·데이터 기반 산업혁신 컨설팅 | ISO·빅데이터·교육',
    template: '%s | 해태시스템 (HAETAE SYSTEM)'
  },
  description: 'AI·빅데이터 분석, ESG 컨설팅, ISO 인증 전문 기업. 빅데이터분석기사, ISO 국제심사원, GHG·GRI 검증심사원 보유. 스마트팩토리·데이터바우처 수행. 광주 본사 컨소시엄 5명.',
  keywords: [
    'AI 빅데이터 분석',
    'ESG 컨설팅',
    'ISO 인증',
    'ISO 9001',
    'ISO 14001',
    'ISO 45001',
    'GHG 검증',
    'GRI 보고서',
    '빅데이터분석기사',
    'AI 교육',
    'Python 교육',
    '스마트팩토리',
    '데이터바우처',
    '광주 컨설팅',
    '광주 AI'
  ],
  authors: [{ name: '해태시스템 (HAETAE SYSTEM)' }],
  creator: '해태시스템',
  publisher: '해태시스템',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hsystem.vercel.app',
    siteName: '해태시스템 (HAETAE SYSTEM)',
    title: '해태시스템 - AI·ESG·데이터 기반 산업혁신 컨설팅',
    description: 'AI·빅데이터 분석, ESG 컨설팅, ISO 인증 전문. 검증된 전문가와 국제 자격으로 신뢰할 수 있는 서비스 제공',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '해태시스템 - AI·ESG·데이터 기반 산업혁신 컨설팅',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '해태시스템 - AI·ESG·데이터 기반 산업혁신 컨설팅',
    description: 'AI·빅데이터 분석, ESG 컨설팅, ISO 인증 전문 기업',
    images: ['/og-image.jpg'],
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
    google: '845stqUXS6n3PiKrXMmqmgq75rk7cb0UWSJE-s9lxHA',
    naver: 'e548375c5e31c445acad88d83627211933e635ab',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://hsystem.vercel.app/#organization',
        name: '해태시스템 (HAETAE SYSTEM)',
        url: 'https://hsystem.vercel.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://hsystem.vercel.app/logo.png'
        },
        description: 'AI·ESG·데이터 기반 산업혁신 컨설팅 전문 기업. AI 빅데이터 분석, ESG 컨설팅, ISO 인증, IT·AI 교육 제공',
        founder: {
          '@type': 'Person',
          name: '정혜진',
          jobTitle: '대표'
        },
        foundingDate: '2024',
        address: {
          '@type': 'PostalAddress',
          addressLocality: '광주광역시',
          addressRegion: '광주광역시',
          postalCode: '',
          addressCountry: 'KR'
        },
        sameAs: [
          'https://github.com/leejin-kyu/hsystem'
        ],
        knowsAbout: [
          'AI 빅데이터 분석',
          'ESG 컨설팅',
          'ISO 인증',
          'GHG 검증',
          'GRI 보고서',
          'Python 교육'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://hsystem.vercel.app/#website',
        url: 'https://hsystem.vercel.app',
        name: '해태시스템 - AI·ESG·데이터 기반 산업혁신 컨설팅',
        publisher: {
          '@id': 'https://hsystem.vercel.app/#organization'
        },
        inLanguage: 'ko-KR'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://hsystem.vercel.app/#webpage',
        url: 'https://hsystem.vercel.app',
        name: '해태시스템 - AI·ESG·데이터 기반 산업혁신 컨설팅',
        isPartOf: {
          '@id': 'https://hsystem.vercel.app/#website'
        },
        about: {
          '@id': 'https://hsystem.vercel.app/#organization'
        },
        description: 'AI·빅데이터 분석, ESG 컨설팅, ISO 인증 전문 기업. 빅데이터분석기사, ISO 국제심사원, GHG·GRI 검증심사원 보유',
        inLanguage: 'ko-KR'
      }
    ]
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="naver-site-verification" content="e548375c5e31c445acad88d83627211933e635ab" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
