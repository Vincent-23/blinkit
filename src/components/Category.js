import React from "react";
import "./styles/Category.scss";
import Product from "../pages/Products/Product";

const Category = () => {
  let baseCls = "Category";

  const DummyData = [
    {
      id: 1,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 2,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 3,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 4,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 5,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 6,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 7,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
    {
      id: 8,
      image: "water melon.jpg",
      title: "Fresh vegitables",
    },
  ];

  return (
    <div className={`${baseCls}__container`}>
      <div className={`${baseCls}__items-left-bar`}>
        <div className={`${baseCls}__wrapper-container`}>
          {DummyData.map((items) => (
            <div className={`${baseCls}__wrapper-item active`} key={items?.key}>
              <div className={`${baseCls}__wrapper-imageWrapper`}>
                <img
                  className={`${baseCls}__wrapper-image`}
                  src={items?.image}
                />
              </div>
              <div className={`${baseCls}__wrapper-text`}>{items?.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${baseCls}__items-wrapper`}>
        <div className={`${baseCls}__items-wrapper-nav-details`}>
          <div className={`${baseCls}__items-wrapper-nav-details-label`}>
            Buy Fresh Fruits Online
          </div>
          <div className={`${baseCls}__items-wrapper-nav-details-dropdown`}>
            <label className={`${baseCls}__dropdown-label`}>Sort By</label>
            <select name="sorting" className={`${baseCls}__dropdown-options`}>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </div>
        </div>
        <div className={`${baseCls}__items-dynamic-content`}>
          <Product />
        </div>
      </div>
      <div className={`${baseCls}__items-right-bar`}>Right bar</div>
    </div>
  );
};

export default Category;
