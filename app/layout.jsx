import Navbar from "@/components/section/navbar";
import "./globals.css";
import Footer from "@/components/section/footer";

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
            </body>
        </html>
    );
}
