import React from "react"
import code from "./stackoverflow/code.svg";
import jobSalary from "./stackoverflow/jobs-salary.svg";
import jobVisa from "./stackoverflow/jobs-visa.svg";
import jobRemote from "./stackoverflow/jobs-remote.svg";


export default class JobCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            card: [
                {
                    avatar: code,
                    style: { marginTop: "2px", },
                    text: "Browse jobs by technology",
                },
                {
                    avatar: jobSalary,
                    style: { marginTop: "2px", },
                    text: "Browse jobs by Salary",
                },
                {
                    avatar: jobVisa,
                    style: { marginTop: "2px", },
                    text: "Browse jobs by visa sponserships",
                },
                {
                    avatar: jobRemote,
                    style: { marginTop: "2px", },
                    text: "Browse remote-friendly jobs",
                }
            ]
        }
    }

    render() {
        return <div className="template-8 main-content">
            <h3 style={{ padding: "10px" }}>Looking for a job?</h3>

            <div key="template-8-card" className="template-8-card">
                {this.state.card.map(t => <div className="jobs-card" style={t.style}>{<div style={{ alignSelf: "center" }}><img src={t.avatar} className="jobs-card-avatar" /></div>}
                    <p>{t.text}</p>
                </div>)}
            </div>
        </div>
    }
}