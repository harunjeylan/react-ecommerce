import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart.cart)
  return (
  <Box 
    display="flex" 
    alignItems="center" 
    width="100%" 
    height="60px" 
    backgroundColor={shades.neutral[100]} 
    color={shades.neutral[900]}
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
  >
    <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        onClick = {() => navigate("/")}
        sx={{"&:hover":{cursor:"pointer"}}}
        color={shades.secondary[500]}
      >
        ECOMMER
      </Box>
      <Box
       display="flex" 
       justifyContent="space-between"
       columnGap="20px"
       zIndex="2">
        <IconButton sx={{color:"Black"}}><SearchOutlined /></IconButton>
        <IconButton sx={{color:"Black"}}><PersonOutline /></IconButton>
        <Badge
          badgeContent={cart.length}
          color="secondary"
          invisible={cart.length === 0}
          sx={{
            "& .MuiBadge-badge":{
              right:5,
              top:5,
              padding:"0 4px",
              height:"13px",
              minWidth:"13px"
            },
          }}
        >
            <IconButton 
              sx={{color:"Black"}}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
            <ShoppingBagOutlined />
          </IconButton>
        </Badge>
        <IconButton sx={{color:"Black"}}><MenuOutlined /></IconButton>
       </Box>
    </Box>
  </Box>
  );
};

export default NavBar;
