import { Fragment } from "react";
import "./App.css";
import Nav from "./MainComponents/Nav";
import AboutUs from "./MainComponents/AboutUs";
import Header from "./MainComponents/Header";
import Special from "./MainComponents/Special";
import Testimonial from "./MainComponents/Testimonial";
import Footer from "./MainComponents/Footer";
// import ContactForm from "./ReservationComponents/ContactForm";
// import Payment from "./ReservationComponents/Payment";
// import Reservation from "./ReservationComponents/Reservation";

import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Theme from "./Theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Fragment className="App">
        <body>
          <Grid
            templateAreas={`"nav"
                  "header"
                  "special"
                  "testimonials"
                  "about"
                  "footer"`}
            gridTemplateRows={"6rem 1fr 1fr 1fr 1fr 25rem"}
            gridTemplateColumns={"1fr"}
            h="-webkit-fit-content"
            gap="0"
            fontWeight="bold"
          >
            <GridItem pl="2" bg="white.300" area={"nav"}>
              <Nav></Nav>
            </GridItem>
            <main>
              <GridItem pl="2" bg="primary.100" area={"header"}>
                <Header></Header>
              </GridItem>
              <GridItem pl="2" bg="white.300" area={"special"}>
                <Special></Special>
              </GridItem>
              <GridItem pl="2" bg="primary.100" area={"testimonials"}>
                <Testimonial></Testimonial>
              </GridItem>
              <GridItem pl="2" bg="secondary.300" area={"about"}>
                <AboutUs></AboutUs>
              </GridItem>
            </main>
            <GridItem pl="2" bg="secondary.200" area={"footer"}>
              <Footer></Footer>
            </GridItem>
          </Grid>
        </body>
      </Fragment>
    </ChakraProvider>
  );
}

export default App;
