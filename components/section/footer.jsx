import { Facebook, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-primary text-white px-10 py-6">
            <div className="container flex justify-between">
                <h4>Copyright © 2024 AmbisiGo | Powered by Celebesdigital</h4>
                <ul className="flex items-center gap-5">
                    <li>
                        <Link href={""}>
                            <img src="/icons/instagram.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <img src="/icons/linkedin.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <img src="/icons/meta.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <img src="/icons/tiktok.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <img src="/icons/youtube.svg" alt="icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
