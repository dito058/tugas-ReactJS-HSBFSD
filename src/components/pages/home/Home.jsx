import React from "react";
import Navbar from "../../fixed/navbar/navbar";
import Hero from "./hero/Hero";
import Porto from "./porto/Porto";
import Footer from "../../fixed/footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Porto />
            <Footer />
        </>
    );
}

export default Home;
