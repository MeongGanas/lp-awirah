import AboutSection from "@/components/section/about";
import CTA from "@/components/section/cta";
import Galeri from "@/components/section/galeri";
import HeroSection from "@/components/section/hero";
import Layanan from "@/components/section/layanan";
import Produk from "@/components/section/produk";
import Testimoni from "@/components/section/testimoni";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Layanan />
            <Produk />
            {/* <Testimoni /> */}
            <Galeri />
            <CTA />
        </>
    );
}
