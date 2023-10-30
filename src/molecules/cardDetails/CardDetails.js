import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import Image from "../../atoms/image";
import QuantityBtn from "../quantityBtn";
import Card from "../../atoms/card";
import CardPriceQuantity from "../cardPriceQuantity";

import styles from "./cardDetails.module.scss";

const CardDetails = ({ className="" , items = []}) => {
  return (
    <VerticalContainer  className={classNames(styles.container, className)}>
      <Card className={styles.card}>
        {/* <HorizontalContainer className={styles.item}> */}
          <Image className={styles.image} image={items.productImage} />
          <Text className={styles.productName}>Title</Text>
          <Text className={styles.productQuantity}>700 g</Text>
        {/* </HorizontalContainer> */}
        <CardPriceQuantity className={styles.priceQuantityItem} items={items}/>
        <VerticalContainer />
      </Card>
    </VerticalContainer>
  );
};

export default CardDetails;
