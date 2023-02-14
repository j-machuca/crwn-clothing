import ShopItem from "../shop-item/shop-item.component.js";

import "./categories-styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <ShopItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
