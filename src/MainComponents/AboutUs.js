import { Heading, Image, Text } from "@chakra-ui/react";
import OwnerImage from "../assets/Mario and Adrian A.jpg";
import OwnerImage2 from "../assets/Mario and Adrian b.jpg";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <Heading as={"h1"} size={"3xl"}>
        Little Lemon
      </Heading>
      <Heading as={"h2"} size={"2xl"}>
        Chicago
      </Heading>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
      <Image src={OwnerImage} />
      <Image src={OwnerImage2} />
    </section>
  );
};

export default AboutUs;
