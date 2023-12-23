import FooterBottom from "./FooterBottom";
import FooterEmail from "./FooterEmail";
import FooterTop from "./FooterTop";
import SocialMedia from "./SocialMedia";
import "./style.scss"

const Footer=()=>{
    return(
        <footer>
        <FooterEmail/>
        <SocialMedia/>
        {/* <FooterTop/> */}
        <FooterBottom/>
        </footer>
    )
}

export default Footer;
