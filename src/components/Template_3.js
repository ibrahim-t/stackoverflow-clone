import React from "react"
import publicQA from "./stackoverflow/private-questions.svg";
import findCandidate from "./stackoverflow/find-candidate.svg";
import accelerate from "./stackoverflow/accelerate.svg";

export default class Template_3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            card: [
                {
                    id: "privateQ&A",
                    avatar: publicQA,
                    text: "Quickly find and share internal knowledge with",
                    link: { text: "Private Q&A", action: "www.stackoverflow.com/teams" }
                },
                {
                    id: "talent",
                    avatar: findCandidate,
                    style: { margin: "2px 38px" },
                    text: "Find the perfect candidate for your growing technical team with",
                    link: { text: "Talent Solutions", action: "www.stackoverflow.com/talent" }
                },
                {
                    id: "ads",
                    avatar: accelerate,
                    style: { marginTop: "2px", },
                    text: "Accelerate the discovery of your products or services through our",
                    link: { text: "Advertising plateform", action: "www.stackoverflow.com/advertising" }
                }
            ]
        }
    }

    render() {
        return <div key="template-3 " className="template-3 main-content">
            <h3>For businesses, by developers</h3>
            <p>Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively</p>
            <div key="template-3-card" className="template-3-card">
                {this.state.card.map(t => <div className="dev-card" style={t.style}>{<img src={t.avatar} className="dev-card-avatar" />}
                    <p>{t.text} <a href={t.link.action} style={{ color: "#f48024" }}>{t.link.text}</a></p>
                </div>)}
            </div>
        </div>
    }
}