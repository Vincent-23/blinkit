import React, { useState } from "react";
import classNames from "classnames";
import Button from "../../atoms/button/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Verticalcontainer from "../../atoms/verticalContainer";
import Text from "../../atoms/text";
import horizontalContainer from "../../atoms/horizotalContainer";
import CartHelper from '../../helper/cartHelper.js';
import styles from "./quantity.module.scss";

const QuantityBtn = ({ className = "", items = {} }) => {

  const [ isAdding, setIsAdding] = useState(false);
  const { isInCart, addToCart, addQuantity, removeQuantity, getItemCount, getTotalAmount } = CartHelper();
  console.log("q!", items);
  const handleAddCart = async (data) => {
    await addToCart(data)
    await isInCart(data?.id);
    console.log("q!", isInCart(data?.id));

  }
  return (
    <horizontalContainer className={classNames(styles.container, className)}>
      {isInCart(items?.id) ? (
        <Text onClick={() => handleAddCart(items)}>Add</Text>
      ) : (
        <>
          <RemoveIcon className={classNames(styles.minusBtnItem, className)} onClick={() => removeQuantity(items?.id)}/>
          <Text className={classNames(styles.quantityTextItem, className)}>
            {getItemCount()}
          </Text>
          <AddIcon className={classNames(styles.addBtnItem, className)} onClick={() => addQuantity(items?.id)}/>
        </>
      )}
    </horizontalContainer>
  );
};

export default QuantityBtn;
