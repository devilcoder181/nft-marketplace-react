import { Link } from "react-router-dom";
import { iconTwitter, iconInstagram, iconTelegram, iconDiscord, iconYoutube } from "../../assets/svg/svg";
import { ReactSVG } from 'react-svg'
import "./footer.scss";

const UIFooter = ()=> {
    return (
        <footer>
            <div className="container">
                <div className="footer_wrapper">
                    <div className="top_">
                        <h3>Join Urbranvyali Community</h3>
                        <ul className="social_list">
                            <li>
                                <a href="#" target="_blank" className="link_">
                                    <ReactSVG src={iconTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="link_">
                                    <ReactSVG src={iconInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="link_">
                                    <ReactSVG src={iconTelegram} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="link_">
                                    <ReactSVG src={iconDiscord} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="link_">
                                    <ReactSVG src={iconYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bottom_">
                        <p>&copy; Urbranvyali All Right Reserved {new Date().getFullYear()}</p>

                        <ul>
                            <li><Link to="/">Terms & Conditions</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )   
}

export default UIFooter;