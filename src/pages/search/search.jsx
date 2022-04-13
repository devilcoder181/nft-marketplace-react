import UISection from "../../components/section/pageSection";
import { useSearchContext } from "../../../store/searchContext";
import "./search.scss";

const SearchResult = ()=> {

    const {searchText} = useSearchContext();

    return (
        <UISection>
            <div className="container">
                <div className="search_wrapper">
                    <h1>Your search for <strong>"{searchText}"</strong></h1>
                </div>

                <div className="search_result_wrapper">
                    <div className="s_item">
                        <div className="s_item_img"></div>
                        <div className="s_item_text_1"></div>
                        <div className="s_item_text_2"></div>
                    </div>

                    <div className="s_item">
                        <div className="s_item_img"></div>
                        <div className="s_item_text_1"></div>
                        <div className="s_item_text_2"></div>
                    </div>

                    <div className="s_item">
                        <div className="s_item_img"></div>
                        <div className="s_item_text_1"></div>
                        <div className="s_item_text_2"></div>
                    </div>

                    <div className="s_item">
                        <div className="s_item_img"></div>
                        <div className="s_item_text_1"></div>
                        <div className="s_item_text_2"></div>
                    </div> 
                </div>
            </div>
        </UISection>
    )
}

export default SearchResult;