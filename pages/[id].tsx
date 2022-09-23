import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export const ProdDetail = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ mx: "auto", marginTop:"2rem", maxWidth: 700, backgroundColor: "#95b3d1"}}>
      <Card
        sx={{ padding: "2rem",  backgroundColor: "#95b3d1", color: "white" }}
      >
        <CardHeader title={product.title}></CardHeader>
        <CardContent>
          <CardMedia
            component="img"
            image={`${product.thumbnail}`}
            alt="product image"
            object-fit="true"
          />
          <Typography sx={{ marginY: "2rem" }}>
            {product.description}
          </Typography>
          <Typography>Brand {product.brand}</Typography>
          <Typography>Stock {product.stock}</Typography>
          <Typography>Price {product.price}$</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => dispatch(addToCart(product))} variant="contained" color="info">
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProdDetail;

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await req.json();
    return {
      props: {
        product: data,
      },
    };
}
