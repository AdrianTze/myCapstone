import UserReview from "./UserReview.js";

const userData = [
  {
    imgSrc: "https://bit.ly/dan-abramov",
    fname: "Dan Abrahmov",
    rating: 8.5,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/ryan-florence",
    fname: "Ryan Florence",
    rating: 7.5,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
  {
    imgSrc: "https://bit.ly/kent-c-dodds",
    fname: "Kent Dodds",
    rating: 9,
    review: "I totally love the mexican food from Little Lemon restaurant",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials">
      {userData.map((user) => {
        return <UserReview data={user}></UserReview>;
      })}
    </section>
  );
};

export default Testimonial;
