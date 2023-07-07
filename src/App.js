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

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Fragment className="App">
        <body>
          <Nav></Nav>
          <Header></Header>
          <main>
            <Special></Special>
            <Testimonial></Testimonial>
            <AboutUs></AboutUs>
          </main>
          <Footer></Footer>
        </body>
      </Fragment>
    </ChakraProvider>
  );
}

export default App;
