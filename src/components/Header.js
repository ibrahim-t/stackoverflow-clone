import React,{Component} from "react";
import "./style/style.css"
const logo=require("./stackoverflow/logo.png");


export class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[{id:"products",title:"Products",selected:true},
            {id:"customers",title:"Customers",selected:false},
            {id:"use cases",title:"Use cases",selected:false}]
        };
    }

    render(){
        return <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",position:"static" ,backgroundColor:"whitesmoke", height:"54px"}}>
            <div key="stack-bar" className="stackbar header-content">stackbar collapsable</div>
            <div key="logo" className="stackoverflow-logo header-content">
                <a href="www.stackoverflow"> <img alt="stackoverflow" src={logo} style={{height:"3.6rem",width:"10rem"}} >
                </img>
                </a>
                </div>
    {this.state.data.map((t,index)=><div key={`${t.id}-${index}`} className= "header-content "><div className={`list-header-${t.selected && `active`}`}>{t.title}</div></div>)}
    <div key="searchbar " className="header-content">
        <input type="search" placeholder="Search..." ></input>
    </div>
    <div key="login-signup" className="header-content" >
        <button>Login</button>
        <button>Sign up</button>
        </div>

            </div>
    }
}