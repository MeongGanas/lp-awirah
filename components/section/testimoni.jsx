import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function Testimoni() {
    return (
        <div className="px-10 py-16">
            <div className="container space-y-7">
                <h1 className="text-primary text-4xl font-[900] relative">
                    Testimoni
                    <img
                        src="/images/Testimoni_Text.webp"
                        alt="text"
                        className="w-96 absolute -bottom-8"
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
                                        src="/images/testimoni.webp"
                                        className="w-full"
                                        alt="testimoni"
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
