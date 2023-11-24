import { Link } from "react-router-dom"
import data from "./menu.json"

const FooterTop=()=>{
    return(
        <div className="footer_menu_content">
            <ul className="footer_menu_container">
            {data.map((item:any)=>(
                <li key={item.id}>
                    <Link to="/">{item.title}</Link>
                </li>
            ))}

            </ul>
        </div>
    )
}

export default FooterTop