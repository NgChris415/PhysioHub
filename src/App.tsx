// import { useState } from "react";
import { LowBackPainCard } from "./assets/components/low_back_pain_card";
import { ShoulderPainCard } from "./assets/components/shoulder_pain_card";
import { KneePainCard } from "./assets/components/knee_pain_card";
import { AnklePainCard } from "./assets/components/ankle_pain_card";
import { TreatmentPageInfo } from "./assets/components/treatment_page_info";
import { AboutCard } from "./assets/components/about_section";
import { DisclaimerCard } from "./assets/components/disclaimer";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
    return (
        <div
            className="background"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
        >
            <div className="navbar">
                <h1 className="title">PhysioHub</h1>
                <div className="nav-buttons">
                    <a href="https://www.instagram.com/chrees.ng/">
                        <FaInstagram color="white" size="40" />
                    </a>
                    <a href="https://www.linkedin.com/in/ngchristopher1/">
                        <FaLinkedin color="white" size="40" />
                    </a>
                    <a href="https://github.com/NgChris415">
                        <FaGithub color="white" size="40" />
                    </a>
                </div>
            </div>
            <TreatmentPageInfo />
            {/* <div className="treatment-card-container"> */}
            <div className="treatment-cards">
                <LowBackPainCard />
                <KneePainCard />
                <ShoulderPainCard />
                <AnklePainCard />
            </div>
            {/* </div> */}
            <div className="footer">
                <AboutCard />
                <DisclaimerCard />
            </div>
        </div>
    );
}

export default App;
