import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const Nav = () => {
  const cartItemLen = useSelector((state: RootState) => state.cart.cartItem.length);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <Link href="/">
            <Typography
              sx={{
                mr: 2,
                display: { xs: "block", md: "flex" },
                fontSize:"1.5rem",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor:"pointer"
              }}
            >
              E-Commerce
            </Typography>
          </Link>
          <Link href="/cart">
            <Box component="div">
              <Tooltip title="Cart">
                <IconButton>
                  <Badge badgeContent={cartItemLen} color="error">
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
