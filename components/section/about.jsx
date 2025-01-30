export default function AboutSection() {
    return (
        <div className="pt-20 pb-12" id="tentang">
            <div className="container px-5">
                <div className="grid lg:grid-cols-2">
                    <div className="lg:pt-10 lg:pr-10">
                        <video className="w-full" controls autoPlay>
                            <source src="/videos/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex flex-col gap-10 border-l-2 border-[#299CB1] pl-10 py-10 relative">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-primary text-4xl font-[900] relative">
                                <div className="w-4 h-4 bg-[#299CB1] rounded-full absolute -left-12 top-1/2 -translate-y-1/2"></div>
                                Tentang Kami
                            </h2>
                            <p className="leading-[21.6px]">
                                PT. Ambisigo Wisata Raudhotul Haramain (AWIRAH)
                                Tour dan Travel Adalah anak Perusahaan Ambisigo
                                yang bergerak pada bidang Usaha Agency Wisata
                                Tour dan Travel termasuk menjadi Agen Marketing
                                Travel Umroh dan Haji. Perusahaan AWIRAH
                                bekerjasama dengan para travel untuk kami
                                pasarkan kepada para konsumen, masyarakat dengan
                                mensosialisasikan keunggulan masing-masing
                                Travel sebagai bahan pertimbangan bagi
                                masyarakat dalam menentukan pilihan sesuai
                                kebutuhan,
                            </p>
                            <p className="leading-[21.6px]">
                                Kami memberikan layanan berkualitas bagi para
                                jamaah dalam menjalankan ibadah umroh dan haji,
                                Melalui Travel biro perjalanan Haji, Umroh dan
                                perjalanan wisata lainnya. Sebagai agen
                                Marketing perjalanan kami bekerjasama dengan
                                Perusahaan Travel Umroh dan Haji yang sudah
                                berpengalaman, yang mengutamakan kepuasan dan
                                kenyamanan setiap jamaah dalam Perjalanan
                                Menunaikan Umroh dan Haji. PT. Awirah melakukan
                                kerjasama yang intensif dengan Para Biro
                                perjalanan wisata , Umroh dan Haji mengenai
                                Pelayanan yang terbaik,memastikan keamanan dan
                                kenyamanan jamaah. Dengan kata lain memberikan
                                standar pelayanan terbaik sebelum, selama,
                                maupun setelah perjalanan umroh, sehingga dapat
                                membantu membangun kepercayaan masyarakat dan
                                menarik lebih banyak pelanggan potensial.
                            </p>
                            <p className="leading-[21.6px]">
                                Dengan Team Marketing yang terampil dan
                                berpengalaman, AWIRAH sebagai Agen Marketing
                                Travel Umroh dan Haji memberikan Informasi
                                melalui Biro Travel Mitra AWirah Paket Umroh dan
                                Haji dengan perjalanan yang komprehensif namun
                                terjangkau, mulai dari persiapan administrasi,
                                akomodasi yang nyaman, transportasi yang aman
                                dan nyaman, hingga pelayanan pendampingan selama
                                perjalanan.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-primary text-4xl font-[900] relative">
                                <div className="w-4 h-4 bg-[#299CB1] rounded-full absolute -left-12 top-1/2 -translate-y-1/2"></div>
                                Visi Kami
                            </h2>
                            <p className="leading-[21.6px]">
                                Menjadi Agen Travel Terbaik dalam memberikan
                                pelayanan dalam dalam bidang Pariwisata sesuai
                                Syariah.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-primary text-4xl font-[900] relative">
                                <div className="w-4 h-4 bg-[#299CB1] rounded-full absolute -left-12 top-1/2 -translate-y-1/2"></div>
                                Misi Kami
                            </h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>Menjadi Agen Perjalanan Wisata</li>
                                <li>
                                    Menjadi Agen Marketing terbaik bagi biro
                                    perjalanan Umroh dan Haji.
                                </li>
                                <li>
                                    Melayani customer dengan baik dan
                                    profesional.
                                </li>
                                <li>
                                    Melakukan sosialisasi, Advokasi,
                                    pendampingan kepada customer.
                                </li>
                                <li>
                                    Melakukan promosi secara aktif dan masif
                                    secara Offline dan Online.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
