import React from 'react'
import SearchSection from "../components/layout/home/SearchSection";
import Tours from "../components/layout/home/Tours";
import Ads from "../components/layout/home/Ads";
import Hotels from "../components/layout/home/Hotels";
import Flights from "../components/layout/home/flights/Flights";
import Support from "../components/layout/home/Support";
import Companies from "../components/layout/home/Companies";
import Magazine from "../components/layout/home/Magazine";
import Bests from "../components/layout/home/Bests";
import Faq from "../components/layout/home/Faq";

const Home =() => {
    return (
        <div className="home">
            <SearchSection />
            <Tours />
            <Ads />
            <Hotels />
            <Flights />
            <Support />
            <Companies />
            <Magazine />
            <Bests />
            <Faq />
        </div>
    )
};
export default Home;
