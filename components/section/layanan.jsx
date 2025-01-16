import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function Layanan() {
    return (
        <div className="px-10 pt-32 pb-16" id="layanan">
            <div className="container space-y-5">
                <h1 className="text-primary text-4xl font-[900] relative">
                    Layanan
                    <img
                        src="/images/Layanan_Text.webp"
                        alt="text"
                        className="w-72 absolute -bottom-10 -z-10"
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
                                <LayananCard
                                    name={"Pengurusan Administrasi"}
                                    desc={
                                        "Kami menyediakan layanan administrasi travel lengkap dan profesional untuk kelancaran perjalanan Anda."
                                    }
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <LayananCard
                                    name={"Penyedia Informasi Travel"}
                                    desc={
                                        "Kami menyediakan informasi lengkap dari setiap travel, termasuk paket, harga, tiket, akomodasi, transportasi, serta pemandu Umroh dan Haji."
                                    }
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <LayananCard
                                    name={"Travel yang Aman dan Nyaman"}
                                    desc={
                                        "Kami memastikan Jamaah mendapatkan Layanan yang Aman dan Nyaman dari Travel."
                                    }
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <LayananCard
                                    name={"Mediator Customer dan Biro Travel"}
                                    desc={
                                        "Kami menjadi mediator pelanggan dan biro travel untuk memastikan komunikasi lancar dan perjalanan memuaskan."
                                    }
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <LayananCard
                                    name={"Jasa Konsultan Parawisata"}
                                    desc={
                                        "Kami menyediakan jasa konsultan pariwisata untuk merencanakan dan mengelola destinasi wisata."
                                    }
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

function LayananCard({ name, desc }) {
    return (
        <div className="w-full rounded-sm overflow-hidden shadow-sm border">
            <img src="/images/layanan.webp" className="w-full" alt="layanan" />
            <div className="p-5 space-y-2">
                <h1 className="text-xl font-[900] leading-[27px] tracking-[-0.72px]">
                    {name}
                </h1>
                <p className="leading-[21.6px] h-20">{desc}</p>
            </div>
        </div>
    );
}
