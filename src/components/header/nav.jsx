import { Link } from "react-router-dom";
import "./nav.scss";

const UINavList = ({navobj})=> {
    return (
        <nav>
            <ul>
                {
                    navobj && 
                    navobj.map((item)=> 
                        <li key={item.id}><Link to={item.link}>{item.name}</Link></li>
                    )
                }
            </ul>
        </nav>
    )
}

export default UINavList;