import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItems from "./MenuItems";
import Category from "./Category";
import "./styles/Layout.scss";

const Layout = () => {
  let baseCls = "Layout";

  return (
    <div className={`${baseCls}__body-container`}>
      <div className={`${baseCls}__container`}>
        <div className={`${baseCls}__item-image`}>
          <img className={`${baseCls}__image`} src="/logo.svg" />
          <div className={`${baseCls}__divider`}></div>
        </div>
        <div className={`${baseCls}__item-details`}>
          <div className={`${baseCls}__time`}>Delivery in 11 minutes</div>
          <span className={`${baseCls}__address`}>
            Bengaluru, Karnataka, India{" "}
            <ArrowDropDownIcon className={`${baseCls}__item-icon`} />
          </span>
        </div>
        <div className={`${baseCls}__item`}>
          <SearchIcon className={`${baseCls}__search-icon`} />
          <input className={`${baseCls}__item-field`} />
        </div>
        <div className={`${baseCls}__item`}>
          <p className={`${baseCls}__login`}>Login</p>
        </div>
        <div className={`${baseCls}__item-cart`}>
          <ShoppingCartIcon className={`${baseCls}__cart-icon`} />
          <p className={`${baseCls}__mycart`}>My Cart</p>
        </div>
      </div>
      <div className={`${baseCls}__menuItems`}>
        <MenuItems />
      </div>
      <div className={`${baseCls}__category`}>
        <Category />
      </div>
    </div>
  );
};

export default Layout;
