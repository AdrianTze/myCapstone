import logo from "../assets/Logo.svg";
import facebookIcon from "../assets/socialMedia/facebook.png";
import InstagramIcon from "../assets/socialMedia/instagram.png";
import LinkedInIcon from "../assets/socialMedia/linkedin.png";
import TwitterIcon from "../assets/socialMedia/twitter.png";
import YouTubeIcon from "../assets/socialMedia/youtube.png";

const socialMediaIcons = [
  {
    src: facebookIcon,
    alt: "Facebook icon",
  },
  {
    src: InstagramIcon,
    alt: "Instagram icon",
  },
  {
    src: LinkedInIcon,
    alt: "LinkedIn icon",
  },
  {
    src: TwitterIcon,
    alt: "Twitter icon",
  },
  {
    src: YouTubeIcon,
    alt: "YouTube icon",
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <img src={logo} alt="Little Lemon Logo" width={"300px"} />
        <h3>Doormat Navigation</h3>
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
        <h3>Contact</h3>
        <ul>
          <li>
            <p>Address</p>
          </li>
          <li>
            <p>04XX-XXX-XXX</p>
          </li>
          <li>
            <p>
              <a href="mailto:littlelemon@example.com">
                littlelemon@example.com
              </a>
            </p>
          </li>
        </ul>
        <h3>Follow Us</h3>
        <ul>
          {socialMediaIcons.map((icon) => {
            return (
              <li>
                <a>
                  <img src={icon.src} alt={icon.alt} width={"20px"} />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
