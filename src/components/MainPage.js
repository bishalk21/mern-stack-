import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const MainPage = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main className="main">{children}</main>
      </Container>
      <Footer />
    </>
  );
};
