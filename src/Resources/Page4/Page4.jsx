import "./style.css"
export default function Page4(){
    return(
        <div className="Page4">
            <h1 className="p4_header">Contact Me</h1>
            <img className="AstroOnPlanet" alt="Astronaut on Planet" src={require("../../Data/Images/AstronautPlanet.png")} />
            <img className="Saturn" alt="Saturn" src={require("../../Data/Images/Saturn.png")}/>
            <div className="FinalPage_Cont">
                <ul className="contact_list">
                    <li className="list-item">
                        <img alt="linkedin" className="list-icon" src={require("../../Data/Images/linkedin.png")} />
                        &emsp;<a href="https://www.linkedin.com/in/vrushang-anand12">LinkedIn</a>
                    </li>
                    <li  className="list-item">
                        <img alt="facebook" className="list-icon" src={require("../../Data/Images/facebook.png")} />
                        &emsp;<a href="https://www.facebook.com/vrushang.anand.12">Facebook</a>
                    </li>
                    <li className="list-item">
                        <img  alt="instagram" className="list-icon" src={require("../../Data/Images/instagram.png")} /> 
                        &emsp;<a href="https://www.instagram.com/vrushang.anand/">Instagram</a>
                    </li>
                    <li className="list-item">
                        <img alt="gmail" className="list-icon" src={require("../../Data/Images/gmail.png")} />
                        &emsp;<a href="mailto:vrushanganand20@gmail.com">Gmail</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}