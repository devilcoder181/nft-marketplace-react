import { Link } from "react-router-dom";
import './navLogo.scss';
 
const UIHeaderLogo = ({img})=> {
    return (
        <div className="logo_container">
           <Link to="/">
                <img src={img} alt="" />
           </Link>
        </div>
    )
}

export default UIHeaderLogo;