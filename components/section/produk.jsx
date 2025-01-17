import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const data = [
    {
        source: "/images/produk/umroh_tanur.webp",
        name: "🕋 UMROH AWAL RAMADHAN BERSAMA TANUR MUTHMAINNA",
        desc: "Harga mulai dari  Rp. 34,5 Juta",
    },
    {
        source: "/images/produk/umroh_full.webp",
        name: "🕋 UMROH FULL RAMADHAN BERSAMA MEDIA WISATA",
        desc: "Harga mulai dari Rp. 56,5 Juta",
    },
    {
        source: "/images/produk/feb_media.webp",
        name: "🕋 UMROH AWAL RAMADHAN BERSAMA MEDIA WISATA",
        desc: "Harga mulai dari Rp. 33,5 Juta",
    },
    {
        source: "/images/produk/akhir_tanur.webp",
        name: "🕋 UMROH AKHIR RAMADHAN BERSAMA TANUR MUTHMAINNA",
        desc: "Harga mulai dari Rp. 36,750 Juta",
    },
];

export default function Produk() {
    return (
        <div className="px-10 pt-32 pb-16" id="produk">
            <div className="container space-y-5">
                <h1 className="px-5 text-primary text-4xl font-[900] relative">
                    Produk
                    <img
                        src="/images/Produk_Text.webp"
                        alt="text"
                        className="w-72 absolute -bottom-6 -z-10"
                    />
                </h1>
                <div className="px-5">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {data.map((produk, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <ProdukCard
                                        source={produk.source}
                                        name={produk.name}
                                        desc={produk.desc}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

function ProdukCard({ source, name, desc }) {
    return (
        <Link
            href={"https://wa.me/6281245463322"}
            className="w-full block rounded-sm overflow-hidden shadow-sm border"
        >
            <div
                className="w-full h-[420px] bg-cover"
                style={{
                    backgroundImage: `url(${source})`,
                }}
            ></div>
            <div className="p-5 space-y-3">
                <h1 className="text-xl font-[900] leading-[27px] tracking-[-0.72px]">
                    {name}
                </h1>
                {/* <div className="h-36 md:h-24 space-y-2">
                    {paket.map((p) => ( */}
                <p className="leading-[21.6px] font-medium">{desc}</p>
                {/* ))}
                </div> */}
            </div>
        </Link>
    );
}
