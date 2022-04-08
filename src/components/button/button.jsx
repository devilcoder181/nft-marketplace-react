import { Link } from "react-router-dom";
import "./button.scss";

const UIButton = ({title})=> {
    return (
        <button className="btn_primary">
            <span>{title}</span>
        </button>
    )
}

export const UILinkButton = ({link, title})=> {
    return (
        <Link className="btn_primary" to={link}>
            <span>{title}</span>
        </Link>
    )
}

export const ButtonGroup = (props)=>{ 

    let align_ = props.align ? props.align : 'start_';

    return (

        <div className={'btn_group' + ' ' + align_}>
            {props.children}
        </div>


    )

}

export default UIButton;