import React from "react";
import { Link } from "react-router-dom";
import Background from "../../../../assets/image/bg-img.webp";
import Fitor from "../../../../assets/image/fitor-voyage.webp";
import Restaurant from "../../../../assets/image/restaurant.webp";
import "./porto.css";

function Porto() {
    const links = [
        {
            id: 1,
            href: "https://github.com/dito058/fitor-voyage",
            judul: "FITOR VOYAGE",
            subJudul: "Web Design/Development",
            alt: "Fitor Voyage",
            img: Fitor,
        },
        {
            id: 2,
            href: "https://github.com/Restaurant-Murah/restoran",
            judul: "Restaurant Murah",
            subJudul: "Web Design/Development",
            alt: "Restauran Murah",
            img: Restaurant,
        },
    ];

    return (
        <>
            <main
                className="bg-cover -mt-56"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <section className="bg-black/50">
                    <div className="w-full h-80 flex justify-center items-end">
                        <h1 id="port" className="text-white text-9xl font-bold">
                            Portfolio
                        </h1>
                    </div>

                    <div className="h-screen flex justify-around items-center -mt-16">
                        {links.map(
                            ({ id, judul, subJudul, href, img, alt }) => (
                                <a
                                    key={id}
                                    href={href}
                                    target="_blank"
                                    id="fitor"
                                    className="w-2/5 text-white hover:text-black bg-black h-2/5 flex justify-evenly items-center rounded-2xl shadow-2xl shadow-black hover:cursor-pointer hover:scale-110 hover:bg-white"
                                >
                                    <div className="h-full flex items-center justify-center">
                                        <div className="bg-white flex justify-center h-4/5 items-center rounded-3xl">
                                            <img
                                                src={img}
                                                alt={alt}
                                                className="w-3/4 h-5/6"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center text-2xl">
                                        <h1>{judul}</h1>
                                        <h3>{subJudul}</h3>
                                    </div>
                                </a>
                            )
                        )}
                    </div>

                    <div className="flex justify-center">
                        <Link
                            to={"/Portfolio"}
                            id="more"
                            className="border-solid hover:cursor-pointer border-white hover:border-black border-2 bg-black w-1/4 flex justify-center items-center -mt-32 mb-24 text-2xl text-white rounded-full hover:bg-white hover:text-black hover:scale-110 hover:duration-500"
                        >
                            <p>LEBIH BANYAK</p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Porto;
