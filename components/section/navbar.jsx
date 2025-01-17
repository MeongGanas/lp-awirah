"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import ContactBtn from "../contactBtn";

const links = [
    {
        href: "#tentang",
        label: "Tentang Kami",
    },
    {
        href: "#layanan",
        label: "Layanan",
    },
    {
        href: "#produk",
        label: "Produk",
    },
    {
        href: "#galeri",
        label: "Galeri",
    },
];

export default function Navbar() {
    const [onScroll, setOnScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setOnScroll(true);
            } else {
                setOnScroll(false);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`py-3 sticky top-0 z-50 transition-all duration-300 ${
                onScroll
                    ? "bg-[#EFEFEFD9] backdrop-blur-sm bg-opacity-100"
                    : "bg-opacity-0"
            }`}
        >
            <div className="container px-5 flex items-center justify-between">
                <Link href={"/"}>
                    <img src="/images/logo.webp" alt="logo" width={140} />
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex gap-8 items-center">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    href={link.href}
                                    className="font-bold hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <ContactBtn />
                    </ul>
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="block md:hidden">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle></SheetTitle>
                        <ul className="flex flex-col gap-3">
                            {links.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="font-bold"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <ContactBtn />
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
