import React from "react"
import publicQA from "./stackoverflow/public-qa.svg"; 
import privateQA from "./stackoverflow/private-qa.svg"; 
import jobs from "./stackoverflow/jobs.svg"; 

export default class Myview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    id: "public-QA",
                    title: "Public Q&A",
                    logo: publicQA ,
                    style:{marginTop:"64px"},
                    about: "Get answers to more than 16.5 million questions and give back by sharing your knowledge with others. Sign up for an account.",
                    actions: [{ id: "browse", title: "Browse questions", backgroundColor: "#2b2d6e" }]
                },
                {
                    id: "private-QA",
                    title: "Private Q&A",
                    logo: privateQA,
                    style: { marginLeft: "64px", marginRight: "64px",marginBottom:"40px" },

                    about: "Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&A engine.",
                    actions: [{ id: "try-it-for-free", title: "Try for free", backgroundColor: "#f48024" }]
                },
                {
                    id: "browse-jobs",
                    title: "Browse jobs",
                    logo: jobs,
                    style: { marginTop: "64px" },

                    about: "Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.",
                    actions: [{ id: "find-job", title: "Find a job", backgroundColor: "#2b2d6e" }]
                }
            ]
        }
    }
    render() {
        return <div className="card-content main-content">
            {this.state.cardData.map(cd => {
                return <div className="card-item" style={{...cd.style}}>
                    {/* <ReactLogo/> */}
                    <img src={cd.logo} />
                    <h4>{cd.title}</h4>
                    <p>{cd.about}</p>
                    {cd.actions && cd.actions.length > 0 ? cd.actions.map(d => {
                        return <a style={{ backgroundColor: d.backgroundColor, color: "#fff",padding:"12px 24px",borderRadius:"5px" }} key={d.id}>{d.title}</a>
                    }) : null}
                </div>

            }
            )
            }
        </div>
    }
}