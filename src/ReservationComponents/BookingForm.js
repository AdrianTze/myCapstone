import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const BookingForm = () => {
  const bookingFormik = useFormik({
    initialValues: {
      date: new Date().getDate,
      time: "",
      numDiners: 2,
      occasion: "Birthday",
      seating: "Standard",
    },
    onSubmit: () => {},
    validationSchema: Yup.object({
      date: Yup.date().min(new Date(), "Reserved date cannot be from the past"),
    }),
  });

  const [sliderValue, setSliderValue] = React.useState(4);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <>
      <FormControl w={"md"} px={"20"}>
        <FormLabel htmlFor="date" color={"secondary.300"} fontSize={"lg"}>
          Date
        </FormLabel>
        <Input
          variant={"filled"}
          placeholder="Enter date"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="date"
          name="date"
          {...bookingFormik.getFieldProps()}
        />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
      <FormControl w={"md"} px={"20"}>
        <FormLabel htmlFor="firstName" color={"secondary.300"} fontSize={"lg"}>
          Time
        </FormLabel>
        <Select
          variant={"filled"}
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="date"
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </Select>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormControl w={"md"} px={"20"}>
        <HStack>
          <FormLabel
            htmlFor="firstName"
            color={"secondary.300"}
            fontSize={"lg"}
          >
            Number of Diners
          </FormLabel>
          <Text pb={"2"} pl={"10"} color={"secondary.300"} fontSize={"2xl"}>
            {sliderValue}
          </Text>
        </HStack>
        <Slider
          defaultValue={4}
          min={2}
          max={10}
          step={1}
          onChange={(v) => setSliderValue(v)}
          onMouseEnter={(e) => setShowTooltip(true)}
          onMouseLeave={(e) => setShowTooltip(false)}
        >
          <SliderTrack bg="secondary.200">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="primary.200" />
          </SliderTrack>

          <Tooltip
            hasArrow
            bg="secondary.300"
            color="primary.100"
            placement="top"
            isOpen={showTooltip}
            label={`${sliderValue}`}
          >
            <SliderThumb boxSize={6} />
          </Tooltip>
        </Slider>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormControl w={"md"} px={"20"}>
        <FormLabel htmlFor="firstName" color={"secondary.300"} fontSize={"lg"}>
          Occasion
        </FormLabel>
        <Select
          variant={"filled"}
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="date"
        >
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </Select>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormControl w={"md"} px={"20"}>
        <FormLabel htmlFor="firstName" color={"secondary.300"} fontSize={"lg"}>
          Seating Options
        </FormLabel>
        <RadioGroup>
          <Stack direction="column">
            <Radio colorScheme="primary" value="Standard">
              <Text color={"secondary.300"}>Standard</Text>
            </Radio>
            <Radio colorScheme="primary" value="Outside">
              <Text color={"secondary.300"}>Outside</Text>
            </Radio>
          </Stack>
        </RadioGroup>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>
    </>
  );
};

export default BookingForm;
