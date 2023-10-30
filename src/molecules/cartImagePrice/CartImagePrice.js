import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Image from "../../atoms/image";
import Text from "../../atoms/text";
import QuantityBtn from "../quantityBtn";
import styles from './cartImagePrice.module.scss'

const CartImagePrice = () => {
  return (
    <VerticalContainer className={classNames(styles.container)}>
     
        <HorizontalContainer className={classNames(styles.container)}>
          <Image className={classNames(styles.imageItem)} image={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=80/app/images/products/sliding_image/532903a.jpg"} />
          <VerticalContainer className={classNames(styles.textContainer)}>
            {/* <HorizontalContainer> */}
              <Text className={classNames(styles.titleText)}>Supreme joy gift pack</Text>
              <Text className={classNames(styles.weightText)}>500 g</Text>
              <Text className={classNames(styles.PriceText)}>₹ 200</Text>
            {/* </HorizontalContainer> */}
          </VerticalContainer>
          <QuantityBtn />
        </HorizontalContainer>

    </VerticalContainer>
  );
};

export default CartImagePrice;
