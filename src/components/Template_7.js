import React from "react"
import cube from "./stackoverflow/developer.svg"
import message from "./stackoverflow/advocate.svg"
import support from "./stackoverflow/open-source.svg"
import jobChange from "./stackoverflow/career-switcher.svg"



export default class Template_7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "cube",
                    title: "Write the script of the future",
                    img: cube,
                    text: "Get your coding questions answered to learn, build, and level up whether you’re beginning with JavaScript or a React professional.",
                },
                {
                    id: "cube",
                    title: "Support open source",
                    img: support,
                    text: "Reach users of your project by following tags, answering newcomer questions, and empowering experts in the community. Read the curl project creator’s story.",
                },
                {
                    id: "cube",
                    title: "Acquire and share knowledge",
                    img: message,
                    text: "Answer questions and gain insights from an audience of developers using your technology on Stack Overflow.",
                },
                {
                    id: "jobchange",
                    title: "Find career opportunities",
                    img: jobChange,
                    text: "reate a profile that shows off your expertise and credentials to help you make your next move. Start your Developer Story.",
                },
            ]
        }
    }

    render() {
        return <div className="template-7 main-content">
            <h3>Learn and grow with Stack Overflow</h3>
            <div className="stack-container">
                {this.state.data.map(td => {
                    return <div className="stack-card">
                        <div className="img-stack">
                            <img src={td.img} />
                        </div>
                        <div>
                            <h4>{td.title}</h4>
                            <p>{td.text}</p>
                        </div>
                    </div>

                })}
            </div>
        </div >
    }
}