import landingImage from "../assets/restaurant chef B.jpg";

const Header = () => {
  return (
    <>
      <header>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <button>Reserve a table</button>
        <img
          src={landingImage}
          alt="A restaurant chef sprinkling garnish to the cuisine"
          width={"400rem"}
        />
      </header>
    </>
  );
};

export default Header;
