import Icon from "@mdi/react";
import { mdiMoped } from "@mdi/js";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

const DishCard = function (props) {
  const { imgPth, imgAlt, name, price, description } = props.data;

  return (
    <>
      <Card maxW={"sm"}>
        <CardBody>
          <Image src={imgPth} alt={imgAlt} borderRadius="lg" />
          <Heading size={"md"}>{name}</Heading>
          <Text>{price}</Text>
          <Text>{description}</Text>
          <Text>Order a delivery</Text>
          <Icon path={mdiMoped} size={1} />
        </CardBody>
      </Card>
    </>
  );
};

export default DishCard;
