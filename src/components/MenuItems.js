import React from 'react';
import './styles/MenuItems.scss'

const MenuItems = () => {
    let baseCls = 'MenuItems'
    const DataItems = [
        { id:1, label:"Vegitable & Fruits"},
        { id:2, label:"Dairy & Breakfast"},
        { id:3, label:"Munchies"},
        { id:4, label:"cold Drinks & Juices"},
        { id:5, label:"Instant & Frozen Food"},
        { id:6, label:"Tea, coffee & Health Drinks"},
        { id:7, label:"Bakery & Biscuits"},
        { id:8, label:"More"},
    ]
  return (
    <div className={`${baseCls}__container`}>
        <div className={`${baseCls}__item`}>
            {
                DataItems.map((items) => (
                    <div className={`${baseCls}__product-item`} key={items.id}>
                        {items.label}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MenuItems