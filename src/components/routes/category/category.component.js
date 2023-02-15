import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../../product-card/product-card.component";

// Context
import { CategoriesContext } from "../../../context/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const c = category[0].toUpperCase() + category.substring(1);

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[c]);

  useEffect(() => {
    setProducts(categoriesMap[c]);
  }, [category, categoriesMap, c]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
