import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./ReservationComponents/BookingForm";
import Header from "./MainComponents/Header";
import Reservation from "./ReservationComponents/Reservation";
import { AlertProvider } from "./contextAPI/alertContext";

test("Renders the Header Heading", () => {
  render(<Header />);

  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();

  const headingElement2 = screen.getByText("Chicago");
  expect(headingElement2).toBeInTheDocument();
});

test("Renders the BookingForm Element with static text", () => {
  const dispatch = jest.fn();
  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  render(
    <BookingForm slot={initializeTimes} dispatch={dispatch}></BookingForm>
  );

  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();

  const headingElement2 = screen.getByText("Find a table for any occasion");
  expect(headingElement2).toBeInTheDocument();

  const labelElement = screen.getByText("Date");
  expect(labelElement).toBeInTheDocument();

  const labelElement2 = screen.getByText("Time");
  expect(labelElement2).toBeInTheDocument();

  const labelElement3 = screen.getByText("Number of Diners");
  expect(labelElement3).toBeInTheDocument();

  const labelElement4 = screen.getByText("Occasion");
  expect(labelElement4).toBeInTheDocument();

  const labelElement5 = screen.getByText("Seating Options");
  expect(labelElement5).toBeInTheDocument();
});

test("Submit the booking form", () => {
  const dispatch = jest.fn();
  const handleBooking = jest.fn();
  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  render(
    <BookingForm
      slot={initializeTimes}
      dispatch={dispatch}
      onBooking={handleBooking}
    ></BookingForm>
  );
  const submitButton = screen.getByText("Confirm");

  fireEvent.click(submitButton);

  expect(handleBooking).toHaveBeenCalled();
});

test("Validate the behaviour of initializeTimes() and updateTimes() in Reservation component", () => {
  render(
    <AlertProvider>
      <Reservation></Reservation>
    </AlertProvider>
  );

  // initializeTimes() test
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const dateInput = screen.getByLabelText("Date");

  let initializeTimesOptionElements = screen.getByLabelText("Time").children;

  initializeTimesOptionElements;

  for (let option of initializeTimesOptionElements) {
    expect(initialTimes.includes(option.innerHTML)).toBeTruthy();
    expect(option).toBeInTheDocument();
  }

  // updateTimes() test
  let newDate = new Date();
  newDate.setDate(newDate.getDate() + 2);

  const changedValue = newDate.toISOString().split("T")[0];

  fireEvent.change(dateInput, { target: { value: changedValue } });

  for (let option of initializeTimesOptionElements) {
    expect(initialTimes.includes(option.innerHTML)).toBeTruthy();
    expect(option).toBeInTheDocument();
  }
});
