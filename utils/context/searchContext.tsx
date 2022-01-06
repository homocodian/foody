import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface SearchContext {
  isSearchActive: boolean;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  setSearchStateActive: Dispatch<SetStateAction<boolean>>;
}

const searchContext = createContext({} as SearchContext);

export const getSearchState = () => useContext(searchContext);

function SearchStateProvider(props: { children: ReactNode }) {
  const [isSearchActive, setSearchStateActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState("indian");
  return (
    <searchContext.Provider
      value={{
        isSearchActive,
        activeCategory,
        setSearchStateActive,
        setActiveCategory,
      }}
    >
      {props.children}
    </searchContext.Provider>
  );
}

export default SearchStateProvider;
