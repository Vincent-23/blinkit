import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "../../context/MyContext";
import DeliveryInfo from "../../molecules/deliveryInfo";
import SearchBar from "../../atoms/searchBar";
import ListItems from "../../datas/listItems.json";
import Logo from "../../atoms/logo";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import Text from "../../atoms/text";
import MenuItems from "../../molecules/menuItems";
import styles from "./header.module.scss";

const Header = () => {
  const { cartItem } = useContext(MyContext);
  const [cartCount, setCartCount] = useState("");
  const [items, setItems] = useState("");

  useEffect(() => {
    setCartCount(cartItem);
  }, [cartItem]);

  const handleCartCount = () => {
    let itemCounts = cartCount.length;
    setItems(itemCounts);
    let amount = cartCount.reduce((a, b) => a.price + b.price);
    console.log("count!", itemCounts, amount);
  };
  //   console.log("test!", VerticalContainer);
  return (
    <>
      <VerticalContainer className={styles.headerVerticalContainer}>
        <VerticalContainer className="">
          <HorizontalContainer>
            <Logo className={styles.navLogo} image="/logo.svg" />
            <DeliveryInfo />
            <SearchBar />
            <Text className={styles.navLogin}>Login</Text>
            <Text>My Cart</Text>
          </HorizontalContainer>
        </VerticalContainer>
      </VerticalContainer>
      <MenuItems items={ListItems} />
    </>
  );
};

export default Header;
