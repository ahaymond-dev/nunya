import React from "react";

// import Printables from "./components/printables";
import Carousel from "./components/carousel";

// import "../assets/styles/projects.css";

function Print() {
    return (
        <div id="printables" className="container">
            <div className="justify-content-center row">
                <h2 id="printablestitle">PRINTABLES</h2>
                <div className="row text-center">
                    <div id="printablescontent">
                        Below we have included some downloadable designs. These can be used for stories on social media, phone backgrounds, and display in other mediums whether digital or in print. These designs will only be available for a limited time, so download them while they are here and check back next month for more free designs!
                    </div>
                </div>
                
                <div className="row">
                    <Carousel />
                </div>
            </div>
        </div>
    );
}

export default Print;