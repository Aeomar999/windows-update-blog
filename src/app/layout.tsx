import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PreferencesProvider } from "@/context/PreferencesContext";
import { CommunityProvider } from "@/context/CommunityContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WindowsUpdateBlog - Latest OS and App Security Updates",
  description: "Your source for the latest Windows 11, Edge, and Office 365 updates, security patches, and release notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PreferencesProvider>
          <CommunityProvider>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
                <main style={{ flex: 1, paddingBottom: '4rem' }}>
                  {children}
                </main>
              <Footer />
            </div>
          </CommunityProvider>
        </PreferencesProvider>
      </body>
    </html>
  );
}
