import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import QuantityBtn from "../quantityBtn";
import styles from "./cardPriceQuantity.module.scss";

const CardPriceQuantity = ({ className="", items}) => {
  return (
    <HorizontalContainer className={classNames(styles.container, className)}>
      <VerticalContainer className={classNames(styles.priceContainer)}>
        <Text className={classNames(styles.offerPrice)}>{`₹ ${items.sellingPrice}`}</Text>
        <Text className={classNames(styles.mrpPrice)}>{`₹ ${items.actualPrice}`}</Text>
      </VerticalContainer>
      <HorizontalContainer className={classNames(styles.quantityBtnItem)}>
      <QuantityBtn className={styles.quantityBtn}/>
      </HorizontalContainer>
    </HorizontalContainer>
  );
};

export default CardPriceQuantity;
