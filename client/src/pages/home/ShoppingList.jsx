import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)")
  
  const breakPoint = useMediaQuery("(min-width:600px)");
  const hundleChange = (event, newValue) => {
    setValue(newValue);      
  };
  
  async function getItems(){
      const items = await fetch("http://localhost/1337/api/items?populate=image",{method:"GET"}).then((res)=>res.json())
      dispatch(setItems(items.data));
  }
  useEffect(()=>{
      getItems()
  },[])
  
  
  return (
    <div>ShoppingList</div>
    );
};

export default ShoppingList;
