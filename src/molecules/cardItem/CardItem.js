import React from 'react';
import classNames from 'classnames';
import CategoryItems from '../../datas/CategoryItems.json';
import VerticalContainer from '../../atoms/verticalContainer';
import Horizontailcontainer from '../../atoms/horizotalContainer';
import Logo from '../../atoms/logo'
import styles from './cardItem.module.scss'

const CategoryListElement = ({ className ="", categoryList }) => {
    return categoryList.map((items) => (
        <div className={classNames(styles.itemContainer, className)} key={items?.id}>
          <div className={classNames(styles.imageContainer, className)}>
            <Logo className={classNames(styles.imageItem, className)} image={items?.image} />
          </div>
          <div className={classNames(styles.textItem, className)}>{items?.title}</div>
        </div>
      ))
}

const CardItem = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
            <CategoryListElement categoryList={CategoryItems}/>
    </VerticalContainer>
          
  )
}

export default CardItem