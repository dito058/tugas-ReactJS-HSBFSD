import React from "react";
import Fitor from "../../../../assets/image/fitor-voyage.webp";
import Restaurant from "../../../../assets/image/restaurant.webp";
import "./port.css";

function Port() {
    const link = [
        {
            id: 1,
            href: "https://github.com/dito058/fitor-voyage",
            web: "https://dito058.github.io/fitor-voyage/",
            judul: "FITOR VOYAGE",
            subJudul: "Web Design/Development",
            alt: "Fitor Voyage",
            img: Fitor,
            desc: "Sebuah perusahaan bernama Fitor Voyage sedang mencari Web Developer untuk mengembangkan situs web pertama mereka yang akan mencerminkan style editing mereka yang unik dan dapat diperluas untuk proyek saat ini dan kedepannya.",
            tech: "Teknologi yang dipakai: HTML, CSS, JavaScript, React, Vite",
        },
        {
            id: 2,
            href: "https://github.com/Restaurant-Murah/restoran",
            web: "https://restaurant-murah.github.io/restoran/",
            judul: "Restaurant Murah",
            subJudul: "Web Design/Development",
            alt: "Restauran Murah",
            img: Restaurant,
            desc: "Sebuah proyek web sederhana bertemakan rumah makan murah meriah.",
            tech: "Teknologi yang dipakai: HTML dan CSS",
        },
    ];

    return (
        <>
            <main className="bg-gray-400 flex justify-center">
                <section className="w-4/5 flex items-center flex-col mb-24">
                    {link.map(
                        ({
                            id,
                            href,
                            web,
                            judul,
                            subJudul,
                            alt,
                            img,
                            desc,
                            tech,
                        }) => (
                            <div
                                key={id}
                                className="bg-black h-[80vh] w-full flex justify-around mt-14 rounded-2xl shadow-2xl shadow-black"
                            >
                                <div className="w-1/2 h-full flex justify-center items-center">
                                    <div className="bg-gray-400 border-solid border-white border-4 w-11/12 h-5/6 flex justify-center items-center rounded-full">
                                        <img
                                            src={img}
                                            alt={alt}
                                            className="w-3/5"
                                        />
                                    </div>
                                </div>

                                <div className="text-white text-xl w-1/2 text-center flex justify-center flex-col">
                                    <h1 className="font-bold">{judul}</h1>
                                    <h2>{subJudul}</h2>
                                    <br />
                                    <p>{desc}</p>
                                    <br />
                                    <h2>{tech}</h2>
                                    <br />
                                    <div className="w-full flex justify-around">
                                        <a
                                            href={href}
                                            target="_blank"
                                            id="por"
                                            className="bg-white cursor-pointer flex justify-center items-center text-sm font-bold text-black border-solid border-gray-500 border-2 hover:bg-black hover:text-white w-2/5 h-10 rounded-full"
                                        >
                                            LIHAT PROYEK
                                        </a>

                                        <a
                                            href={web}
                                            target="_blank"
                                            id="por"
                                            className="bg-white cursor-pointer flex justify-center items-center text-sm font-bold text-black border-solid border-gray-500 border-2 hover:bg-black hover:text-white w-2/5 h-10 rounded-full"
                                        >
                                            LIHAT HALAMAN WEB
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </section>
            </main>
        </>
    );
}

export default Port;
