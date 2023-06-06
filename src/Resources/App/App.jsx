import "./style.css"
import Page1 from "../Page1/Page1"
import Page2 from "../Page2/Page2"
import Page3 from "../Page3/Page3"
import Page4 from "../Page4/Page4"
export default function App(){
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            alert("Please view on desktop :)");
            window.location.reload();
         } 
    return(
        <div className="body">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    )
}