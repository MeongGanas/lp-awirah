"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function Galeri() {
    return (
        <div className="px-10 pt-32 pb-12" id="galeri">
            <div className="container space-y-5">
                <h1 className="text-primary text-4xl font-[900] relative">
                    Galeri
                    <img
                        src="/images/Galeri_Text.webp"
                        alt="text"
                        className="w-64 absolute -bottom-5"
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
                            <CarouselItem className="gap-5 md:basis-1/3">
                                <Gambar source={"/images/galeri1.webp"} />
                            </CarouselItem>
                            <CarouselItem className="gap-5 md:basis-1/3">
                                <Gambar source={"/images/galeri2.webp"} />
                            </CarouselItem>
                            <CarouselItem className="gap-5 md:basis-1/3">
                                <Gambar source={"/images/galeri2.webp"} />
                            </CarouselItem>
                            <CarouselItem className="gap-5 md:basis-1/3">
                                <Video source={"/videos/video1.mp4"} />
                            </CarouselItem>
                            <CarouselItem className="gap-5 md:basis-1/3">
                                <Video source={"/videos/video2.mp4"} />
                            </CarouselItem>
                            <CarouselItem className="gap-5 md:basis-1/3">
                                <Video source={"/videos/video3.mp4"} />
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

function Gambar({ source }) {
    return <img src={source} className="w-full" alt="galeri" />;
}

function Video({ source }) {
    return (
        <video className="border-2 w-full h-full aspect-square" controls>
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
