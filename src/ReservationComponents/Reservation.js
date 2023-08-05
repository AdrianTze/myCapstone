import { Heading, VStack } from "@chakra-ui/react";
import restaurantImage from "../assets/restaurant.jpg";

import BookingForm from "./BookingForm";

const Reservation = () => {
  return (
    <section className="reservation">
      <VStack alignItems={"flex-start"}>
        <Heading
          as={"h1"}
          color={"primary.200"}
          fontWeight={"medium"}
          size={"3xl"}
        >
          Reservation
        </Heading>

        <Heading
          as={"h2"}
          color={"secondary.300"}
          fontWeight={"medium"}
          size={"xl"}
        >
          Find a table for any occasion
        </Heading>

        <img
          src={restaurantImage}
          alt="A restaurant chef sprinkling garnish to the cuisine"
          width={"350rem"}
        />
      </VStack>
      <VStack>
        <BookingForm></BookingForm>
      </VStack>
    </section>
  );
};

export default Reservation;
