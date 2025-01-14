export default function AboutSection() {
    return (
        <div className="px-10 pt-20 pb-12" id="tentang">
            <div className="container">
                <div className="grid lg:grid-cols-2">
                    <div className="lg:pt-10 lg:pr-10">
                        <video
                            className="w-full lg:sticky lg:top-32"
                            controls
                            autoPlay
                        >
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
                                Tanwirah adalah perusahaan travel Umroh yang
                                berdedikasi untuk memberikan pelayanan
                                perjalanan ibadah ke Tanah Suci dengan standar
                                kualitas terbaik. Kami memahami bahwa Umroh
                                bukan hanya sekadar perjalanan, melainkan momen
                                spiritual yang penuh makna.
                            </p>
                            <p className="leading-[21.6px]">
                                Dengan tim profesional, fasilitas unggulan, dan
                                bimbingan dari pembimbing ibadah yang
                                berpengalaman, kami berkomitmen untuk memastikan
                                setiap langkah perjalanan Anda berjalan lancar,
                                aman, dan berkesan.
                            </p>
                            <p className="leading-[21.6px]">
                                Kepercayaan Anda adalah amanah bagi kami.
                                Bersama Tanwirah, wujudkan impian ibadah suci
                                Anda dengan penuh kenyamanan dan ketenangan
                                hati.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-primary text-4xl font-[900] relative">
                                <div className="w-4 h-4 bg-[#299CB1] rounded-full absolute -left-12 top-1/2 -translate-y-1/2"></div>
                                Visi Kami
                            </h2>
                            <p className="leading-[21.6px]">
                                "Menjadi penyedia layanan perjalanan Umroh
                                terpercaya yang memberikan kenyamanan, keamanan,
                                dan pengalaman spiritual terbaik bagi setiap
                                jamaah."
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-primary text-4xl font-[900] relative">
                                <div className="w-4 h-4 bg-[#299CB1] rounded-full absolute -left-12 top-1/2 -translate-y-1/2"></div>
                                Misi Kami
                            </h2>
                            <ul className="list-disc space-y-2 pl-5">
                                <li>
                                    Memberikan Pelayanan Terbaik: Menyediakan
                                    fasilitas berkualitas dan layanan
                                    profesional untuk kenyamanan jamaah.
                                </li>
                                <li>
                                    Pendampingan Ibadah yang Optimal:
                                    Menyediakan bimbingan ibadah Umroh oleh
                                    pembimbing berpengalaman dan kompeten.
                                </li>
                                <li>
                                    Transparansi dan Kepercayaan: Menjaga
                                    kejujuran dan transparansi dalam setiap
                                    proses keberangkatan hingga kepulangan.
                                </li>
                                <li>
                                    Fasilitas Nyaman dan Aman: Menjamin
                                    akomodasi, transportasi, dan kebutuhan
                                    jamaah selama perjalanan dengan standar
                                    terbaik.
                                </li>
                                <li>
                                    Komitmen Kepuasan Jamaah: Selalu berupaya
                                    memberikan pengalaman Umroh yang khusyuk,
                                    aman, dan berkesan.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
