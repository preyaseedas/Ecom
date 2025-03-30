import React from "react";
import ItemCategory from "../common/ItemCategory";

const BeveragesCategory = () => {
  const beveragesItemList = [
    {
      id: 1,
      img: require('../assets/images/coke.png'),
      itemName: 'Diet Cake',
      weight: '70',
      price: '90',
    },
    {
      id: 2,
      img: require('../assets/images/sprite.png'),
      itemName: 'Diet Cake',
      weight: '89',
      price: '10.99',
    },
    {
      id: 3,
      img: require('../assets/images/appleGrapeJuice.png'),
      itemName: 'Sprite Can',
      weight: '',
      price: '10.50',
    },
    {
      id: 4,
      img: require('../assets/images/orangeJuice.png'),
      itemName: 'Apple & Grape Juice',
      weight: '',
      price: '15.99',
    },
    {
      id: 5,
      img: require('../assets/images/cocacolaCan.png'),
      itemName: 'Diet Cake',
      weight: '200',
      price: '14.99',
    },
    {
      id: 6,
      img: require('../assets/images/papsiCan.png'),
      itemName: 'Diet Cake',
      weight: '44',
      price: '70',
    },
  ];
 return <ItemCategory heading="Beverages" list={ beveragesItemList} />};
export default BeveragesCategory;