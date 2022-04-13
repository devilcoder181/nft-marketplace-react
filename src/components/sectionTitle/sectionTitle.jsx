import "./sectionTitle.scss";

const UISectionTitle = (props)=> {

    let title = props.title;

    return (
        <h2 className="urv_section_title">{title}</h2>
    )
    
}

export default UISectionTitle;