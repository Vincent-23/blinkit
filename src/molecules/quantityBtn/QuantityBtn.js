import React from 'react';
import classNames from 'classnames';
import Button from '../../atoms/button/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Verticalcontainer from '../../atoms/verticalContainer';
import Text from '../../atoms/text';
import horizontalContainer from '../../atoms/horizotalContainer';
import styles from './quantity.module.scss';

const QuantityBtn = ({ className="" }) => {
  return (
        <horizontalContainer className={classNames(styles.container, className)}>
            <RemoveIcon className={classNames(styles.minusBtnItem, className)}/>
            <Text className={classNames(styles.quantityTextItem, className)}>1</Text>
            <AddIcon className={classNames(styles.addBtnItem, className)}/>
        </horizontalContainer>
  )
}

export default QuantityBtn