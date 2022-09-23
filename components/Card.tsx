import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

export const CardProd = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <>
      {product.map((el: any) => {
        return (
          <Card sx={{ maxWidth: 345, m: 1,border:"2px solid #969696" }} key={el.id}>
            <Link href={`/${el.id}`}>
              <CardActionArea>
                <CardHeader title={el.title} />
                <CardMedia
                  component="img"
                  height="194"
                  image={`${el.thumbnail}`}
                  alt="Paella dish"
                  object-fit="true"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {el.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions disableSpacing>
                <Button onClick={() => dispatch(addToCart(el))} variant="outlined">
                  ADD TO CART
                </Button>
            </CardActions>
          </Card>
        );
      })}
      ;
    </>
  );
};
export default CardProd;
