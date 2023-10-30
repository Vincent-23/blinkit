import React from 'react';
import classNames from 'classnames';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styles from './quantityBtn.module.scss'

const QuantityBtn = ({ className="", children, ...rest}) => {
  return (
    <button className={classNames(styles.container, className)} {...rest}>
        <AddIcon/>
        <p>1</p>
        <RemoveIcon />
    </button>
  )
}

export default QuantityBtn