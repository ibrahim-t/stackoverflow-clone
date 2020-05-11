import React from "react";
import "./style/style.css"
import findCandidate from "./stackoverflow/find-candidate.svg";
import accelerate from "./stackoverflow/accelerate.svg";
export default class Template_5 extends React.Component {

    render() {
        return <div key="template-5 " className="template-5 main-content">
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
    }
}