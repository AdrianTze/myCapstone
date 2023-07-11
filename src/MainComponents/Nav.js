import { ListItem, UnorderedList } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";

const Nav = () => {
  const handleClick = (anchor) => () => {
    const className = `${anchor}`;
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav>
      <UnorderedList>
        <ListItem>
          <img src={logo} alt="Little Lemon Logo" width={"200px"} />
        </ListItem>
        <ListItem>
          <a href="#Home">Home</a>
        </ListItem>
        <ListItem>
          <a href="#About" onClick={handleClick("aboutus")}>
            About
          </a>
        </ListItem>
        <ListItem>
          <a href="#Menu">Menu</a>
        </ListItem>
        <ListItem>
          <a href="#Reservation">Reservation</a>
        </ListItem>
        <ListItem>
          <a href="#Order">Order Online</a>
        </ListItem>
        <ListItem>
          <a href="#Login">Login</a>
        </ListItem>
      </UnorderedList>
    </nav>
  );
};

export default Nav;
