import React, { Component } from "react";
import { Header } from "./Header";
import "./style/style.css"
import Template_1 from "./Template_1"
import Template_2 from "./Template_2"
import Template_3 from "./Template_3";
import Template_5 from "./Template_5";
import JobCard from "./JobCard";
import { Footer } from "./Footer";
import Template_6 from "./Template_6";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div key="homepage" className="home">
            <div key="header" className="header-section">
                <Header />
            </div>
            <div key="main-body" className="main-body">
                <Template_1 />
                <Template_2 />
                <Template_3 />
                <div key="template-4 " className="template-4 main-content">
                    <h3>Unlock siloed knowledge with Stack Overflow for Teams</h3>
                    <p>Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.</p>
                    <p><a href="www.stackoverflow/teams" style={{ padding: "12px 24px", backgroundColor: "#f48024", color: "white", borderRadius: "5px" }}>Learn More</a></p>
                </div>
                <Template_5 />
                <Template_6 />
                <JobCard />

                <Footer />
            </div>

        </div>
    }
}
