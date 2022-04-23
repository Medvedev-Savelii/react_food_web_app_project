import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filtredCatalog, setFiltredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFiltredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFiltredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filtredCatalog} />
      )}
    </>
  );
};

export { Home };
