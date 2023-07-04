import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <>
      <img src={logo} alt="Little Lemon Logo" width={"300px"} />
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Reservation</a>
          </li>
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
