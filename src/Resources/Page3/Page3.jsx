import "./style.css"
import { Skills } from "../../Data/Skills"
import C from "../../Data/Images/C.png"
import HTMLCSS from "../../Data/Images/HTML_CSS.png"
import Java from "../../Data/Images/Java.png"
import JavaScript from "../../Data/Images/JS.png"
import NodeJs from "../../Data/Images/NodeJs.png"
import Python from "../../Data/Images/Python.png"
import ReactJS from "../../Data/Images/ReactJS.png"
let skills_transpose=20
var bg_color=""
const bg_array=[Python, Java, JavaScript, HTMLCSS, C, ReactJS, NodeJs]
function makeskill(props){
    return(
        <div key={props.key} className="skills_container">
            <h1 >{props.name}</h1>
        </div>

        
    )
}
function changebackground(){
    bg_color=bg_array[(20-skills_transpose)/20]
    document.getElementsByClassName("Page3")[0].style.backgroundImage=`url(${bg_color})`;
    if(Skills[(20-skills_transpose)/20].dark){
        for(let x=0; x<document.getElementsByClassName("skills_container").length-1;x++){
            document.getElementsByClassName("skills_container")[x].style.backgroundColor="#202020"
            document.getElementsByClassName("skills_container")[x].style.color="white"
        }
        document.getElementsByClassName("leftarrow")[0].style="border-color: black"
        document.getElementsByClassName("rightarrow")[0].style="border-color: black"
        
    }
    else{
        document.getElementsByClassName("leftarrow")[0].style="border-color: white"
        document.getElementsByClassName("rightarrow")[0].style="border-color: white"
    }
}
export default function Page3(){


    function rightarrowclicked(){
        if(skills_transpose===-100){
            skills_transpose=40
        }
        for(let x=0; x<document.getElementsByClassName("skills_container").length-1;x++){
        document.getElementsByClassName("skills_container")[x].style=`transform: translate(${skills_transpose-20}vw,-50%)`
        }
        skills_transpose=skills_transpose-20
        changebackground()
    }
    function leftarrowclicked(){
        if(skills_transpose===20){
            skills_transpose=-120
        }
        for(let x=0; x<document.getElementsByClassName("skills_container").length-1;x++){
            document.getElementsByClassName("skills_container")[x].style=`transform: translate(${skills_transpose+20}vw,-50%)`
          
        } 
        skills_transpose=skills_transpose+20
        changebackground()
        }

    return(
        <div id="Page3" className="Page3">
            <h1 className="p3_header">Skills</h1>
            <div className="p3_container">
                <div className="carousel">
                    <div className="carousel-slider">
                        {Skills.map(makeskill)}
                    </div>
                </div>
                <div className="arrow rightarrow" onClick={rightarrowclicked} ></div>
                <div className="arrow leftarrow" onClick={leftarrowclicked} ></div>
            </div>
        </div>
    )  
}