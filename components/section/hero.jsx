import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="px-10 py-16 relative">
            <img
                src="/images/hero.webp"
                className="absolute -top-40 left-0"
                width={400}
                alt="image"
            />
            <div className="container">
                <div className="grid lg:grid-cols-2">
                    <div className="flex flex-col justify-center max-w-xl gap-10">
                        <h1 className="font-[900] text-5xl lg:text-6xl leading-[74.4px] tracking-[-1.9px] text-header">
                            Perjalanan Umroh Aman, Nyaman, dan{" "}
                            <span className="text-primary">Berkesan</span>.
                        </h1>
                        <p className="font-bold leading-[27px]">
                            Wujudkan ibadah suci yang khusyuk dan berkesan
                            dengan layanan terbaik, fasilitas lengkap, serta
                            bimbingan profesional dari keberangkatan hingga
                            kembali ke tanah air.
                        </p>
                        <div className="flex items-center gap-5">
                            <Link
                                href={""}
                                className="border-primary border-2 bg-primary px-5 py-3 rounded-[2px] text-white"
                            >
                                Hubungi Kami
                            </Link>
                            <Link
                                href={""}
                                className="border-primary border-2 font-bold text-primary px-5 py-3 rounded-[2px]"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>

                    <div className="h-full items-center justify-end hidden lg:flex">
                        <img
                            src="/images/madinah.webp"
                            className="w-[450px]"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
