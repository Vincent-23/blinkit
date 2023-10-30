import React, { useContext } from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import LeftSideBar from "../../molecules/leftSideBar/LeftSideBar";
import HomeProductList from "../../organisms/homeProductList/HomeProductList";
import styles from "./product.module.scss";
import HeaderDropDown from "../../organisms/headerDropDown/HeaderDropDown";
import CardDetails from "../../organisms/cartDetails";
import ProductItems from "../../datas/productItems.json";

const ListingCardProduct = ({ items }) => {
  console.log("Listing!", items);
  return items?.map((itemData) => (
      <CardDetails
        className={classNames(styles.cardItems)}
        items={itemData.products}
      />
  ));
};

const Products = ({ className = "" }) => {
  console.log("element!", <ListingCardProduct items={ProductItems} />);
  return (
    <VerticalContainer
      className={classNames(styles.productContainer, className)}
    >
      <HorizontalContainer
        className={classNames(styles.productItem, className)}
      >
        <LeftSideBar />
        <VerticalContainer
          className={classNames(styles.headerDropDown, className)}
        >
          <HeaderDropDown className={classNames(styles.dropDownItem)} />
          {/* <HomeProductList /> */}
          <ListingCardProduct items={ProductItems} />
        </VerticalContainer>
      </HorizontalContainer>
    </VerticalContainer>
  );
};

export default Products;
