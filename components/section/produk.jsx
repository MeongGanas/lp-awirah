import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function Produk() {
    return (
        <div className="px-10 pt-32 pb-16" id="produk">
            <div className="container space-y-5">
                <h1 className="text-primary text-4xl font-[900] relative">
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
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <ProdukCard
                                    name={
                                        "🕋 UMROH AWAL - AKHIR DAN FULL RAMADHON BERSAMA MEIDA WISATA TIMOHO"
                                    }
                                    paket={[
                                        "🛫 Biaya Awal Ramadhan  Rp. 34,5 Juta",
                                        "🛫 Biaya Akhir Romadhon Rp. 46,7 Juta",
                                        "✈ Biaya Full Ramadhon Rp. 48 Juta",
                                    ]}
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <ProdukCard
                                    name={
                                        "🕋 UMROH  FULL - AWAL DAN  AKHIR  RAMADHON I BERSAMA TANUR MUTHMAINNA"
                                    }
                                    paket={[
                                        "🛫 Biaya Awal Ramadhan  Rp. 38,975 Juta",
                                        "🛫 Biaya Akhir Romadhon Rp. 48,950 Juta",
                                        "✈ Biaya Full Ramadhon Rp. 48,950 Juta",
                                    ]}
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

function ProdukCard({ name, paket }) {
    return (
        <div className="w-full rounded-sm overflow-hidden shadow-sm border">
            <img src="/images/layanan.webp" className="w-full" alt="layanan" />
            <div className="p-5 space-y-3">
                <h1 className="text-xl font-[900] leading-[27px] tracking-[-0.72px]">
                    {name}
                </h1>
                <div className="h-36 md:h-24 space-y-2">
                    {paket.map((p) => (
                        <p className="leading-[21.6px]">{p}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
