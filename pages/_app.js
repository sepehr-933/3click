import React from "react";
import '../styles/globals.scss'
import {theme} from "../material.config";
import {ThemeProvider} from "@mui/material";
import 'tailwindcss/tailwind.css'
import Header from "../components/shared/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/shared/Footer";


function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
          <Header />
             <Component {...pageProps} />
          <Footer />
      </ThemeProvider>
  );
}

export default MyApp
