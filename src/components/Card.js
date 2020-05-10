import React from "react"
import publicQA from "./stackoverflow/private-questions.svg";
import findCandidate from "./stackoverflow/find-candidate.svg";
import accelerate from "./stackoverflow/accelerate.svg";

export default class Card extends React.Component {

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
                    style: { margin:"2px 38px" },
                    text: "Find the perfect candidate for your growing technical team with",
                    link: { text: "Talent Solutions", action: "www.stackoverflow.com/talent" }
                },
                {
                    id: "ads",
                    avatar: accelerate,
                    style: { marginTop: "2px",  },
                    text: "Accelerate the discovery of your products or services through our",
                    link: { text: "Advertising plateform", action: "www.stackoverflow.com/advertising" }
                }
            ]
        }
    }

    render() {
        return <div key="template-3-card" className="template-3-card">
            {this.state.card.map(t => <div className="dev-card" style={t.style}>{<img src={t.avatar} className="dev-card-avatar" />}
                <p>{t.text} <a href={t.link.action} style={{ color:"#f48024"}}>{t.link.text}</a></p>
            </div>)}
        </div>
    }
}