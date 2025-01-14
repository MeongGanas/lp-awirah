import Link from "next/link";
import ContactBtn from "../contactBtn";

export default function CTA() {
    return (
        <div className="px-10 py-40 relative">
            <img
                src="/images/shape.webp"
                className="absolute right-0 -z-10 bottom-0 max-w-sm"
                alt="shape"
            />
            <img
                src="/images/cta.webp"
                className="absolute left-0 -z-10 top-0 max-w-64"
                alt="shape"
            />
            <div className="container">
                <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
                    <h1 className="font-[900] leading-[62.4px] tracking-[-0.96px] text-4xl md:text-5xl">
                        Jangan Tunda, Wujudkan Impian Anda{" "}
                        <span className="text-primary">Sekarang</span>!
                    </h1>
                    <p className="leading-[30px] text-base md:text-[20px]">
                        Kuota Terbatas! Daftar hari ini dan mulailah perjalanan
                        suci Anda{" "}
                        <span className="inline md:block">
                            dengan nyaman, aman, dan berkesan.
                        </span>
                    </p>
                    <div className="flex justify-center">
                        <ContactBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}
