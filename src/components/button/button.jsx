import { Link } from "react-router-dom";
import "./button.scss";

const UIButton = ({title, triggerClick, disable})=> {
    
    const triggerMe = (event)=> {
        if(triggerClick){
            triggerClick(event)
        }
    }

    return (
        <button className="btn_primary" disabled={disable} onClick={triggerMe}>
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