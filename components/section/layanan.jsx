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
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <LayananCard
                                        name={"Paket Umroh Reguler"}
                                        desc={
                                            "Layanan Umroh terjangkau dengan akomodasi hotel berbintang, transportasi nyaman, dan bimbingan ibadah berpengalaman."
                                        }
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

function LayananCard({ name, desc }) {
    return (
        <div className="w-full rounded-sm overflow-hidden shadow-sm border">
            <img src="/images/layanan.webp" className="w-full" alt="layanan" />
            <div className="p-5 space-y-2">
                <h1 className="text-xl font-[900] leading-[27px] tracking-[-0.72px]">
                    {name}
                </h1>
                <p className="leading-[21.6px]">{desc}</p>
            </div>
        </div>
    );
}
