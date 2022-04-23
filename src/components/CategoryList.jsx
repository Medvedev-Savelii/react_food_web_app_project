import React from "react";
import { CategoryItem } from "../components/CategoryItem";

function CategoryList(props) {
  const { catalog = [] } = props;
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem />
      ))}
    </div>
  );
}

export { CategoryList };
