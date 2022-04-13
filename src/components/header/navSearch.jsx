import "./navSearch.scss";
import { useSearchContext } from "../../../store/searchContext";
import { useNavigate } from "react-router-dom";

const UIHeaderSearch = ()=> {

    const {searchFn, setUrlHistory, urlHistory} = useSearchContext();
    const navigate = useNavigate();

    const getUrl = ()=> {
        setUrlHistory(window.location.pathname)
    }
    const searchInitFn = (event)=> {
        
        if(event.target.value){
            navigate('/search');
            searchFn(event.target.value);
        }else{
            navigate(urlHistory);
        }
        
    };

    return (
        <div className="header_search">
            <input type="text" placeholder="Search..." onFocus={getUrl} onChange={()=> searchInitFn(event)}/>
        </div>
    )
}

export default UIHeaderSearch;