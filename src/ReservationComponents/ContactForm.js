import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import logo from "../assets/Logo.svg";

const ContactForm = () => {
  return (
    <section className="contactform">
      <HStack wrap={"wrap"} justifyContent={"space-evenly"} pb={"10"}>
        <img src={logo} alt="Little Lemon Logo" width={"300rem"} />
        <Heading as={"h1"} color={"secondary.400"} fontWeight={"semi-bold"}>
          Contact Form
        </Heading>
      </HStack>

      <FormControl isRequired isInvalid={false} maxW={"5xl"} px={"20"}>
        <HStack>
          <FormLabel
            htmlFor="firstName"
            color={"secondary.400"}
            fontSize={"lg"}
          >
            First Name
          </FormLabel>
          <FormErrorMessage pb={"4"}>Required</FormErrorMessage>
        </HStack>
        <Input
          variant={"filled"}
          placeholder="*** First Name"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="text"
        />
      </FormControl>

      <FormControl isRequired isInvalid={false} maxW={"5xl"} px={"20"}>
        <HStack>
          <FormLabel htmlFor="lastName" color={"secondary.400"} fontSize={"lg"}>
            Last Name
          </FormLabel>
          <FormErrorMessage pb={"4"}>Required</FormErrorMessage>
        </HStack>
        <Input
          variant={"filled"}
          placeholder="*** Last Name"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="text"
        />
      </FormControl>

      <FormControl isRequired isInvalid={false} maxW={"5xl"} px={"20"}>
        <HStack>
          <FormLabel htmlFor="phone" color={"secondary.400"} fontSize={"lg"}>
            Phone Number
          </FormLabel>
          <FormErrorMessage pb={"4"}>Required</FormErrorMessage>
        </HStack>
        <Input
          variant={"filled"}
          placeholder="*** Phone Number"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="text"
        />
      </FormControl>

      <FormControl isRequired isInvalid={false} maxW={"5xl"} px={"20"}>
        <HStack>
          <FormLabel htmlFor="email" color={"secondary.400"} fontSize={"lg"}>
            Email
          </FormLabel>
          <FormErrorMessage pb={"4"}>Required</FormErrorMessage>
        </HStack>
        <Input
          variant={"filled"}
          placeholder="*** johndoe@gmail.com"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="email"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired isInvalid={false} maxW={"5xl"} px={"20"}>
        <HStack>
          <FormLabel htmlFor="password" color={"secondary.400"} fontSize={"lg"}>
            Password
          </FormLabel>
          <FormErrorMessage pb={"4"}>Required</FormErrorMessage>
        </HStack>
        <Input
          variant={"filled"}
          placeholder="*** Password"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
          type="password"
        />
      </FormControl>

      <FormControl maxW={"5xl"} px={"20"}>
        <FormLabel
          optionalIndicator
          htmlFor="password"
          color={"secondary.400"}
          fontSize={"lg"}
        >
          Additional information we should know
        </FormLabel>
        <Textarea
          variant={"filled"}
          placeholder="Special Request / Dietary Requirements"
          borderColor={"secondary.400"}
          focusBorderColor="primary.200"
        />
      </FormControl>
      <Button
        alignSelf={"center"}
        maxW={"lg"}
        color={"secondary.400"}
        bg={"primary.200"}
      >
        Continue
      </Button>
    </section>
  );
};

export default ContactForm;
