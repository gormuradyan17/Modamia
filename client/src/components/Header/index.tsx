import { Link } from "react-router-dom"
import MenuItem from "./MenuItem"
import LoginSignBtn from "./NavRight"
import "./style.scss"





export const Header=()=>{
    return (
        <header className="header">
            <section className="header-wrapper">
            <MenuItem/>
            <Link to="/" className="logo">Modamia</Link>
            <LoginSignBtn/>
            </section>
        </header>
    )
}