"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const data = [
    {
        type: "image",
        source: "/images/galeri/galeri1.webp",
    },
    {
        type: "image",
        source: "/images/galeri/galeri2.webp",
    },
    {
        type: "image",
        source: "/images/galeri/galeri3.webp",
    },
    {
        type: "video",
        source: "/videos/video1.mp4",
    },
    {
        type: "video",
        source: "/videos/video2.mp4",
    },
    {
        type: "video",
        source: "/videos/video3.mp4",
    },
];

export default function Galeri() {
    return (
        <div className="px-10 pt-32 pb-12" id="galeri">
            <div className="container space-y-5">
                <h1 className="px-5 text-primary text-4xl font-[900] relative">
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
                            {data.map((galeri, index) => (
                                <CarouselItem
                                    key={index}
                                    className="gap-5 md:basis-1/3"
                                >
                                    {galeri.type === "image" ? (
                                        <Gambar source={galeri.source} />
                                    ) : (
                                        <Video source={galeri.source} />
                                    )}
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
