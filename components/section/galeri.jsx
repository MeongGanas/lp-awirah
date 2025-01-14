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
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/2 gap-5 md:basis-1/3 lg:basis-1/4"
                                >
                                    <img
                                        src="/images/galeri.webp"
                                        className="w-full"
                                        alt="galeri"
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
