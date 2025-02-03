import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-primary text-white py-6">
            <div className="container px-5 flex justify-between flex-wrap space-y-5 sm:space-y-0">
                <h4>Copyright © 2024 AmbisiGo | Powered by Celebesdigital</h4>
                <ul className="flex items-center gap-5">
                    <li>
                        <Link href={"https://www.instagram.com/ambisigo/"}>
                            <img src="/icons/instagram.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://x.com/PTAmbisigo"}>
                            <Twitter className="w-4 h-4" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={
                                "https://web.facebook.com/profile.php?id=100089241637508"
                            }
                        >
                            <img src="/icons/meta.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.tiktok.com/@ambisigo"}>
                            <img src="/icons/tiktok.svg" alt="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://web.telegram.org/a/#6085850377"}>
                            <img
                                src="/icons/telegram.svg"
                                width={20}
                                alt="icon"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
