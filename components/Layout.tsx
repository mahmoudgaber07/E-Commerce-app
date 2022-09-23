import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = (props: any) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};
