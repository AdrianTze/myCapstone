import { ListItem, UnorderedList } from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

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
          <Link to={"/"} className="nav-item" onClick={handleClick("header")}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item" onClick={handleClick("aboutus")}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item">
            Menu
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/reservation"} className="nav-item">
            Reservation
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item">
            Order Online
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/"} className="nav-item">
            Login
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
};

export default Nav;
