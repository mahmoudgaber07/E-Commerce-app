import React from "react";
import { RootState } from "../store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem, clearCart, increase, decrease } from "../slices/cartSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Grid, TableFooter } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from '../styles/Home.module.scss'
import Link from "next/link";

export const Cart = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cartItem);
  const totaPrice = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  return (
    <Container
      className={styles.container}
      sx={{
        marginY: "5rem",
      }}
    >
      {cartItem.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th">#</TableCell>
                <TableCell component="th" align="center">Name</TableCell>
                <TableCell component="th" align="center" colSpan={2}>
                  Image
                </TableCell>
                <TableCell component="th" align="center">Price</TableCell>
                <TableCell component="th" align="center">Quantity</TableCell>
                <TableCell component="th" align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItem.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="td" align="center">{row.title}</TableCell>
                  <TableCell component="td" colSpan={2} align="center">
                    <Image
                      src={`${row.thumbnail}`}
                      alt="product-img"
                      width={30}
                      height={20}
                      layout="responsive"
                    />{" "}
                  </TableCell>
                  <TableCell component="td" align="center">{row.price}</TableCell>
                  <TableCell component="td" align="center">{row.amount}</TableCell>
                  <TableCell component="td" align="center">
                    <Button onClick={() => dispatch(increase(row))}>
                      <AddIcon color="primary" fontSize="large" />
                    </Button>
                    <Button onClick={() => dispatch(decrease(row))}>
                      <RemoveIcon color="primary" fontSize="large"/>
                    </Button>
                    <Button onClick={() => dispatch(removeItem(row))}>
                      <DeleteIcon color="error" fontSize="large" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableCell
                colSpan={2}
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
                component="th"
              >
                TOTAL
              </TableCell>
              <TableCell
                component="td"
                colSpan={3}
                align="right"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                {totaPrice}
              </TableCell>
              <TableCell align="center">
              </TableCell>
              <TableCell colSpan={2} align="center" component="td">
                <Button onClick={() => dispatch(clearCart())}>
                  <DeleteForeverIcon color="error" fontSize="large" />
                </Button>
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh",backgroundColor:"#95b3d1" }}
        >
            <Typography
              component="h1"
              align="center"
              sx={{ color: "white", fontSize: "5rem" }}
            >
              Cart Empty
            </Typography>

              <RemoveShoppingCartIcon
                sx={{marginY: "3rem", color: "white", fontSize: "10rem"}}
            />
            <Link href="/">
              <Button
                variant="contained"
                color="info"
                size="large"
                sx={{ width: "10rem", marginY: "3rem" }}
                >
                SHOP
              </Button>
                </Link>
        </Grid>
      )}
    </Container>
  );
};
