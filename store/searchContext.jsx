import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({children})=> {

    const [searchText, setSearchText] = useState('');
    const [urlHistory, setUrlHistory] = useState('/');

    const searchFn = (value)=> {
        setSearchText(value);
    }

    return (
        <SearchContext.Provider value={{searchText, searchFn, urlHistory, setUrlHistory}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = ()=> {
    const {searchText, searchFn, urlHistory, setUrlHistory} = useContext(SearchContext);
    
    return {searchText, searchFn, urlHistory, setUrlHistory};
}

export default SearchContext;