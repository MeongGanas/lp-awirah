import Navbar from "@/components/section/navbar";
import "./globals.css";
import Footer from "@/components/section/footer";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export const metadata = {
    title: "Tanwirah",
    description:
        "Wujudkan ibadah suci yang khusyuk dan berkesan dengan layanan terbaik, fasilitas lengkap, serta bimbingan profesional dari keberangkatan hingga kembali ke tanah air.",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="antialiased">
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <Link
                    href={"#top"}
                    className="bg-white border-2 border-primary p-2 text-primary fixed right-5 bottom-5"
                >
                    <ChevronUp />
                </Link>
            </body>
        </html>
    );
}
