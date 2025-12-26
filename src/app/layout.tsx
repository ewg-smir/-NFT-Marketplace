import "@/styles/globals.scss";
import type { Metadata } from "next";
import { StoreProvider } from "@/lib/store/StoreProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"; 

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Test assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}