import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import SiteConfig from "../config/site";
import NavBar from "@/components/NavBar";
//import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: SiteConfig.title,
    description: SiteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(`${inter.variable} ${poppins.variable} min-h-screen bg-background font-sans antialiased`)}
            >
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                > */}
                <NavBar />
                {children}
                <Footer />
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
