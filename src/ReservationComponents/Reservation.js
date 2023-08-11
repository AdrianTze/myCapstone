import BookingForm from "./BookingForm";
import { GridItem } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Payment from "./Payment";
import React from "react";
import { useReducer } from "react";
import useScroll from "../customhooks/useScroll";

const updateTimes = (state, action) => {
  console.log(state);
  return state;
};

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const Reservation = () => {
  const { scroll } = useScroll();

  const handleBooking = () => {
    console.log("Booking Form Submitted");
    scroll("contactform");
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <GridItem pl="2" bg="primary.100" area={"header"}>
        <BookingForm
          slot={availableTimes}
          dispatch={dispatch}
          onBooking={handleBooking}
        ></BookingForm>
      </GridItem>
      <GridItem pl="2" bg="secondary.300" area={"special"}>
        <ContactForm></ContactForm>
      </GridItem>
      <GridItem pl="2" bg="primary.100" area={"testimonials"}>
        <Payment></Payment>
      </GridItem>
    </>
  );
};

export default Reservation;
