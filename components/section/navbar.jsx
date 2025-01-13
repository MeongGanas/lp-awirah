"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

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
        href: "#galeri",
        label: "Galeri",
    },
];

export default function Navbar() {
    const [onScroll, setOnScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                setOnScroll(true);
            } else {
                setOnScroll(false);
            }
        });
    });

    return (
        <header
            className={`py-3 px-10 sticky top-0 z-50 transition-colors ${
                onScroll ? "bg-secondary" : "bg-transparent"
            }`}
        >
            <div className="container flex items-center justify-between">
                <img src="/images/logo.webp" alt="logo" width={140} />

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
                        <Link
                            href={""}
                            className="bg-primary px-5 text-sm py-3 rounded-[2px] text-white"
                        >
                            Hubungi Kami
                        </Link>
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
                            <Link
                                href={""}
                                className="bg-primary w-fit px-5 text-sm py-3 rounded-[2px] text-white"
                            >
                                Hubungi Kami
                            </Link>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
