import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ClientOnly } from "@/components/ClientOnly";
import { StoreModal } from "@/components/modals/store-modal";
import { ToastProvider } from "@/components/ToastProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ClientOnly>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <StoreModal />
            <body className={inter.className}>{children}</body>
          </ThemeProvider>
        </ClientOnly>
      </html>
    </ClerkProvider>
  );
}
