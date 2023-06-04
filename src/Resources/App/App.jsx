import "./style.css"
import Page1 from "../Page1/Page1"
import Page2 from "../Page2/Page2"
import Page3 from "../Page3/Page3"
import Page4 from "../Page4/Page4"
export default function App(){
    return(
        <div className="body">
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    )
}