import "./footer.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () =>{
    

    const current = new Date();
    const date = `${current.getMonth()+1}-${current.getFullYear()}`;
    return (
    <div className="footer">
  
 <a href="https://www.facebook.com/"><BsFacebook className="social-icon"/></a>
 <a href="https://www.instagram.com"><BsInstagram className="social-icon" /></a>


 <p className="copyright"> &copy; Copyright  Dev Builder {date}  </p>
            </div>
    
)

}
export default Footer;