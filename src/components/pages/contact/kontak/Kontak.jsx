import React from "react";
import diri from "../../../../assets/image/foto-diri.webp";
import bgIMG from "../../../../assets/image/bg-img.webp";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import "./kontak.css";

function Kontak() {
    return (
        <>
            <main
                className="bg-cover"
                style={{ backgroundImage: `url(${bgIMG})` }}
            >
                <section className="flex justify-between h-screen bg-black/75">
                    <div
                        id="contact"
                        className="mt-14 w-1/3 h-3/4 flex flex-col justify-center items-center"
                    >
                        <h1
                            id="kontak"
                            className="text-5xl text-white font-bold"
                        >
                            TENTANG SAYA
                        </h1>
                        <br />
                        <img
                            src={diri}
                            alt="Foto Profil"
                            className="w-3/4 rounded-xl border-solid border-white border-4"
                        />
                    </div>

                    <div
                        id="contact"
                        className="text-center w-3/4 flex flex-col justify-center items-center text-white"
                    >
                        <div>
                            <h1 className="text-6xl">
                                Saya Andhiko Rudyardito
                            </h1>
                            <br />
                            <p>
                                Sebelum saya mempelajari Web Development, saya
                                sangat menyukai segahal tentang Teknologi. Tapi,
                                saya tidak tahu harus memulai dari mana
                                belajar/menulis kode dan program. Kemudian,
                                teman saya datang dan mengajari saya tentang
                                dunia Pemrograman, khususnya di Pengembangan Web
                                Frontend. Setelah itu, saya mulai mengikuti
                                Bootcamp. Saya belajar tentang HTML {"&"} CSS,
                                JavaScript, dan Frameworknya. Sekarang saya
                                memiliki pengetahuan dasar tentang Web
                                Development. Saya sangat tertarik untuk belajar
                                lebih lanjut tentang Pengembangan Web. Saya
                                orang yang pekerja keras, disiplin, dan mampu
                                bekerja dalam tim.
                            </p>
                        </div>
                        <br />
                        <br />
                        <div className="w-full flex justify-between">
                            <div className="w-1/2">
                                <h2 className="text-2xl">Kontak Saya</h2>
                                <br />
                                <ul>
                                    <li className="flex ml-28">
                                        <MdPhone className="text-2xl mr-5" />
                                        <a
                                            href="https://wa.me/6287876925079"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            (+62)878-7692-5079
                                        </a>
                                    </li>
                                    <br />
                                    <li className="flex ml-28">
                                        <MdEmail className="text-2xl mr-5" />
                                        <a
                                            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpnfkdqzFqpfqlrNrpGfnNGChqrrlNWxSnXVDccdNQWfDlxJdBHWkXrcBncTXPmcKBPFB"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            rudyardito058@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-1/2">
                                <h2 className="text-2xl">Ikuti Saya</h2>
                                <br />
                                <ul className="flex flex-wrap justify-center">
                                    <li className="flex justify-center">
                                        <a
                                            href="https://www.linkedin.com/in/dhiko/"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            <AiFillLinkedin className="text-4xl hover:text-gray-400" />
                                        </a>
                                    </li>
                                    <br />
                                    <li className="flex justify-center">
                                        <a
                                            href="https://github.com/dito058"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            <AiFillGithub className="text-4xl hover:text-gray-400" />
                                        </a>
                                    </li>
                                    <br />
                                    <li className="flex justify-center">
                                        <a
                                            href="https://www.instagram.com/dito_dhiko/"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            <AiFillInstagram className="text-4xl hover:text-gray-400" />
                                        </a>
                                    </li>
                                    <br />
                                    <li className="flex justify-center">
                                        <a
                                            href="https://twitter.com/dito_dhiko"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            <AiFillTwitterCircle className="text-4xl hover:text-gray-400" />
                                        </a>
                                    </li>
                                    <br />
                                    <li className="flex justify-center">
                                        <a
                                            href="https://discordapp.com/users/423916147054739487"
                                            target="_blank"
                                            className="font-sans hover:underline hover:cursor-pointer"
                                        >
                                            <FaDiscord className="text-4xl hover:text-gray-400" />
                                        </a>
                                    </li>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Kontak;
