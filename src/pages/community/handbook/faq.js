import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import Faqs from "../../../sections/Community/Handbook/faq";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const Faq = () => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="FAQ" description="Frequently Asked Questions" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Faqs />
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
};
export default Faq;