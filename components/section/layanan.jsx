import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const data = [
    {
        source: "/images/layanan.webp",
        name: "Pengurusan Administrasi",
        desc: "Kami menyediakan layanan administrasi travel lengkap dan profesional untuk kelancaran perjalanan Anda.",
    },
    {
        source: "/images/layanan.webp",
        name: "Penyedia Informasi Travel",
        desc: "Kami menyediakan informasi lengkap dari setiap travel, termasuk paket, harga, tiket, akomodasi, transportasi, serta pemandu Umroh dan Haji.",
    },
    {
        source: "/images/layanan.webp",
        name: "Travel yang Aman dan Nyaman",
        desc: "Kami menyediakan layanan travel yang aman dan nyaman, kami siap memberikan pengalaman yang tak terlupakan.",
    },
    {
        source: "/images/layanan.webp",
        name: "Mediator Customer dan Biro Travel",
        desc: "Kami menjadi mediator pelanggan dan biro travel untuk memastikan komunikasi lancar dan perjalanan memuaskan.",
    },
    {
        source: "/images/layanan.webp",
        name: "Jasa Konsultan Parawisata",
        desc: "Kami menyediakan jasa konsultan pariwisata untuk merencanakan dan mengelola destinasi wisata.",
    },
];

export default function Layanan() {
    return (
        <div className="px-10 pt-32 pb-16" id="layanan">
            <div className="container space-y-5">
                <h1 className="px-5 text-primary text-4xl font-[900] relative">
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
                        autoplay={true}
                    >
                        <CarouselContent>
                            {data.map((layanan, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <LayananCard
                                        source={layanan.source}
                                        name={layanan.name}
                                        desc={layanan.desc}
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

function LayananCard({ source, name, desc }) {
    return (
        <div className="w-full h-[370px] rounded-sm overflow-hidden shadow-sm border">
            <div
                className="w-full h-52 bg-cover"
                style={{
                    backgroundImage: `url(${source})`,
                }}
            ></div>
            <div className="p-5 space-y-2">
                <h1 className="text-xl font-[900] leading-[27px] tracking-[-0.72px]">
                    {name}
                </h1>
                <p className="leading-[21.6px] h-24 md:h-20">{desc}</p>
            </div>
        </div>
    );
}
