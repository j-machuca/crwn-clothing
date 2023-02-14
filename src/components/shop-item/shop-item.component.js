import "./shop-item.styles.scss";

const ShopItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="shop-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="shop-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default ShopItem;
