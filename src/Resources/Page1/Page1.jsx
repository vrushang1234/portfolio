import { useState } from "react"
import "./style.css"


function scrolled(){
    var cont1=document.getElementsByClassName("p1_text_container")[0]
    var img1=document.getElementsByClassName("pic-container")[0]
    cont1.style=`transform:translateX(${(-200/window.screen.availHeight)*window.scrollY}%)`;
    img1.style=`transform:translateX(${(200/window.screen.availHeight)*window.scrollY}%)`;
    if((200/window.screen.availHeight)*window.scrollY>=150){
        cont1.style.display="none"
        img1.style.display="none"
    }
    var rocket=document.getElementsByClassName("SpaceShuttle")[0];
    rocket.style.left=`${(25-(40/window.screen.availHeight)*window.scrollY)}%`
    rocket.style.top=`${(10-(30/window.screen.availHeight)*window.scrollY)}%`


}


window.addEventListener("scroll",scrolled)
export default function Page1(){
    const [src, setsrc]=useState("SpaceShuttle")
    window.addEventListener("scroll",()=>{
        if(window.scrollY>=20){
            setsrc("SpaceShuttlePropel")
        }
        else{
            setsrc("SpaceShuttle")
        }
    })
    return(
        <div className="Page1">
            <img className="SpaceShuttle" alt="space shuttle" src={require(`../../Data/Images/${src}.png`)} />
            <div className="p1_text_container">
                <h1 className="intro">
                    <div>
                    Hi,<br /> 
                    I'm Vrushang
                    </div>
                    <div className="icode">
                        <div className="typewritetext t1">I make Websites </div>
                        <div className="typewritetext t2">I make Apps</div>
                    </div>
                </h1>
            </div>
            <div className="pic-container">
                <img className="mypic" alt="My Pic" src={require("./Half3.png")} />
            </div>             
        </div>
    )
}