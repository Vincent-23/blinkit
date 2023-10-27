import React from 'react';
import './Styles/Product.scss'
import { Button } from '@mui/material';

const Product = () => {

  let baseCls = 'products'
  
  const ProductData = [
    {
      id:1,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:2,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:3,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:4,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:5,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:6,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:7,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:8,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:9,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
    {
      id:10,
      image:"water melon.jpg",
      duration: "11 mins",
      title: "Kiran Watermelon ( Kallangadi )",
      availability: "1 piece ( 2kg - 4Kg )",
      price: 93,
      mrpPrice: 9,
      discountPrice: 21
    },
  ]
  return (
    <div className={`${baseCls}__container`}>
      {ProductData.map((items) => (
      <div className={`${baseCls}__items`} key={items?.id}>
        <div className={`${baseCls}__cards`}>
          <div className={`${baseCls}__offertag`}>
          <img className={`${baseCls}__offertag-image`} src='offerLogo.svg'/>
            <span className={`${baseCls}__offertag-price`}>25% Off</span>
          </div>
          <div className={`${baseCls}__cards-images`}>
            <img className={`${baseCls}__cards-image`} src={items?.image}/>
          </div>
          <div className={`${baseCls}__cards-duration`}>
            <img className={`${baseCls}__cards-duration-icon`} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"/>11 MINS
          </div>
          <div className={`${baseCls}__cards-title`}>
            {items?.title}
          </div>
          <div className={`${baseCls}__cards-weight`}>
            500g
          </div>
          <div className={`${baseCls}__cards-priceBtn`}>
            <div className={`${baseCls}__cards-priceBtn-price`}>
              {`₹${items?.price}`} <br/>
              <span className={`${baseCls}__cards-priceBtn-price-mrp`}>{`₹${items?.mrpPrice}`}</span>
            </div>
            <div className={`${baseCls}__cards-priceBtn-addBtn`}>
              <button className={`${baseCls}__cards-priceBtn-btn`}>ADD</button>
            </div>
          </div>
          
        </div>
      </div>
      ))}
    </div>
  )
}

export default Product