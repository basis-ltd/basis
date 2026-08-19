import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basis | Trading Systems Research Platform",
  description:
    "Basis documents 17 research tools, strategy services, execution systems, and shared infrastructure with explicit controls and inspectable operating behavior.",
  openGraph: {
    title: "Basis | Trading Systems Research Platform",
    description:
      "Research, strategy, execution, and infrastructure systems with inspectable logic and operating controls.",
    siteName: "Basis",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/nishimweprince/image/upload/v1783477324/basis/basis-logo_lqxfu0.png",
    apple: "https://res.cloudinary.com/nishimweprince/image/upload/v1783477324/basis/basis-logo_lqxfu0.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
