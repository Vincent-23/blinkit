import React from 'react';
import classNames from 'classnames';
import VerticalContainer from '../../atoms/verticalContainer';
import HorizontaolContainer from '../../atoms/horizotalContainer';
import CartHeader from '../../molecules/CartHeader';
import CartImagePrice from '../../molecules/cartImagePrice';
import CartLabelAndPrice from '../../molecules/cartLabelAndPrice';
import CartGrandTotal from '../../molecules/cartGrandTotal';
import styles from './cartDetails.module.scss';

const CartDetails = ({ className = ""}) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
        <CartHeader />
        <CartImagePrice />
        <CartLabelAndPrice />
        <CartGrandTotal />
    </VerticalContainer>
  )
}

export default CartDetails;