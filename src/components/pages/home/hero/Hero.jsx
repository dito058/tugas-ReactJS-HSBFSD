import React from "react";
import HeroIMG from "../../../../assets/image/hero-img.webp";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import "./hero.css";

function Hero() {
    return (
        <>
            <main className="bg-gray-400 pb-24">
                <section className="flex justify-center">
                    <div className="w-4/5 mt-10 flex justify-evenly bg-black rounded-3xl shadow-2xl shadow-black">
                        <div className="w-2/5 flex items-center justify-center">
                            <img
                                id="hero"
                                src={HeroIMG}
                                alt="Hero Image"
                                className="h-4/5 rounded-3xl border-solid border-white border-4"
                            />
                        </div>

                        <div
                            id="heros"
                            className="w-3/5 text-center grid place-content-center mr-10 text-white"
                        >
                            <h1 className="text-4xl">
                                Hi, nama saya Andhiko Rudyardito.
                                <br />
                                Saya seorang Web Developer otodidak yang berasal
                                dari Bandung.
                            </h1>
                            <br />
                            <p className="text-2xl">
                                Saya sangat menyukai Teknologi terutama dalam
                                bidang Web Development. Saya juga Memiliki
                                pengalaman yang saya dapatkan dari Bootcamp. Dan
                                saya seorang yang pekerja keras, disiplin, dan
                                mampu bekerja dalam tim.
                            </p>
                            <br />
                            <br />
                            <div className="text-7xl">
                                <ul className="flex justify-center">
                                    <li className="list-none">
                                        <a
                                            href="https://www.instagram.com/dito_dhiko/"
                                            target="_blank"
                                            className="hover:text-gray-400 hover:cursor-pointer duration-500 cursor-pointer"
                                        >
                                            <AiFillInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/dito058"
                                            target="_blank"
                                            className="hover:text-gray-400 hover:cursor-pointer duration-500 cursor-pointer"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/dito_dhiko"
                                            target="_blank"
                                            className="hover:text-gray-400 hover:cursor-pointer duration-500 cursor-pointer"
                                        >
                                            <AiFillTwitterCircle />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#9ca3af"
                    fill-opacity="1"
                    d="M0,192L15,186.7C30,181,60,171,90,144C120,117,150,75,180,96C210,117,240,203,270,218.7C300,235,330,181,360,160C390,139,420,149,450,176C480,203,510,245,540,266.7C570,288,600,288,630,256C660,224,690,160,720,144C750,128,780,160,810,186.7C840,213,870,235,900,224C930,213,960,171,990,138.7C1020,107,1050,85,1080,106.7C1110,128,1140,192,1170,208C1200,224,1230,192,1260,154.7C1290,117,1320,75,1350,80C1380,85,1410,139,1425,165.3L1440,192L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
                ></path>
            </svg>
        </>
    );
}

export default Hero;
