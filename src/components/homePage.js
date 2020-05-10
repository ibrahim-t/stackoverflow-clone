import React, { Component } from "react";
import { Header } from "./Header";
import "./style/style.css"
import Template_1 from "./Template_1"
import Myview from "./test";
import Card from "./Card";
import JobCard from "./JobCard";
import { Footer } from "./Footer";

import Template_7 from "./Template_7";
import findCandidate from "./stackoverflow/find-candidate.svg";
import accelerate from "./stackoverflow/accelerate.svg";

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
                <div key="template-2 " className="template-2 main-content">
                    <h3>For developers, by developers</h3>
                    <p className="template-2-text">Stack Overflow is an <a href="/questions" >open community</a> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.</p>
                    <div>
                        <Myview />
                    </div>
                </div>
                <div key="template-3 " className="template-3 main-content">
                    <h3>For businesses, by developers</h3>
                    <p>Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively</p>
                    <Card />
                </div>
                <div key="template-4 " className="template-4 main-content">
                    <h3>Unlock siloed knowledge with Stack Overflow for Teams</h3>
                    <p>Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.</p>
                    <p><a href="www.stackoverflow/teams" style={{ padding: "12px 24px", backgroundColor: "#f48024", color: "white", borderRadius: "5px" }}>Learn More</a></p>
                </div>
                <div key="template-5 " className="template-5 main-content">

                    <div className="template-5-cotent">
                        <div className="align-initial" style={{ marginRight: "64px" }}>
                            <div className="template-5-avatar">
                                <img src={findCandidate} alt="test" style={{ height: "5rem" }} />
                            </div>
                            <div>
                                <h2>Hire your technical talent</h2>
                                <p>We help expand your technical hiring strategy to promote your employer brand and highlight relevant open roles to our community of 50 million monthly visitors.</p>
                            </div>
                            <span className="stackoverflow-talent-butn">Stack Overflow Talent</span>
                        </div>

                        <div className="align-initial">
                            <div className="template-5-avatar">
                                <img src={accelerate} alt="test" style={{ height: "5rem" }} />
                            </div>
                            <div>
                                <h2>Reach developers worldwide</h2>
                                <p>Use the world’s largest resource for people who code to help you increase awareness and showcase your product or service across Stack Overflow’s network of Q&A sites</p>
                            </div>
                            <div className="stackoverflow-talent-butn">
                                <span>Stack Overflow Advertising</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div key="template-6 " className="template-6 main-content">
                    <h3>Questions are everywhere, answers are on Stack Overflow</h3>
                </div>
                <Template_7 />
                <JobCard />

                <Footer />
            </div>

        </div>
    }
}
