import { Avatar, Card } from "@chakra-ui/react";

const UserRating = (props) => {
  const { imgSrc, fname, rating, review } = props.data;

  return (
    <Card maxW={"3xs"}>
      <Avatar name={fname} src={imgSrc} size={"xl"} />
      <h3>{fname}</h3>
      <h3>{rating}</h3>
      <p>{review}</p>
    </Card>
  );
};

export default UserRating;
