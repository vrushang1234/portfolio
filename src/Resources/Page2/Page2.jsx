import "./style.css"

function scrolled(){
document.getElementsByClassName("Astronaut")[0].style.display="block";
let p2text= document.getElementsByClassName("p2_text_container")[0];    
if(window.scrollY>window.screen.availHeight/2){
    p2text.style=`opacity:${((4/(window.screen.availHeight))*window.scrollY)-2.5}`;
}
if(window.scrollY>=(window.screen.availHeight)){
        p2text.style.top=`50%`;
        p2text.style.position="absolute";
        document.getElementsByClassName("Astronaut")[0].style.position="absolute"
    }
else{
    document.getElementsByClassName("Astronaut")[0].style.top=`${(60/(window.screen.availHeight-50)*window.scrollY)-50}%`
    document.getElementsByClassName("Astronaut")[0].style.position="fixed"
}

}



window.addEventListener("scroll",scrolled)
export default function Page2(){
    return(
        <div className="Page2">
            <div className="p2_text_container">
                Hey there,<br />
                I'm a student and Computer Enthusiast currently studying in <h>University of California, Irvine</h>. I love <h>brownies and ice-cream</h>😋.<h> Coding and playing games</h> are two of my favorite things to do. GTA is my most favourite game series.
            </div>
            <img className="Astronaut" src={require("../../Data/Images/Astonaut.png")} alt="Astronaut" />
        </div>
    )
}