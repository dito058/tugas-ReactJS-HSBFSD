import { useState } from "react";
import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    const [menu_class, setMenuClass] = useState("menu sembunyi");

    return (
        <>
            <nav className="w-screen fixed flex justify-end">
                <Hamburger
                    color="black"
                    size={30}
                    rounded={true}
                    onToggle={(toggled) => {
                        if (toggled) {
                            setMenuClass("menu visible");
                        } else {
                            setMenuClass("menu sembunyi");
                        }
                    }}
                />

                <div className={menu_class}>
                    <ul>
                        <li>
                            <Link className="hover:cursor-pointer" to={"/"}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:cursor-pointer"
                                to={"/Portfolio"}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:cursor-pointer"
                                to={"/Tentang Saya"}
                            >
                                Tentang Saya
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
