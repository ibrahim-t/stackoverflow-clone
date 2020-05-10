import React from "react";
import "./style/style.css"

export default class Template_1 extends React.Component{

    render(){
         
        return <div key="template-1 " className="template-1 main-content ">
            <div>
                <h2>{`We <3 people who code`}</h2>
                <p1>We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.</p1>
            </div>
            <div className="template-button">
                <a className="template-button dev">For developers</a>
                <a className="template-button business">For businesses</a>

            </div>
        </div>
    }
}