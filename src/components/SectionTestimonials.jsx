import avatar from "../assets/avatar.png";

export const SectionTestimonials = () => {
  return (
    <div className="container section_testimonials">
      <h3>Gamer Reviews</h3>
      <div className="items__grid--Container">
        <div className="testimonials">
          <img src={avatar} alt="testimonial" />
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <p>Once more, everything went great.This was my 19th order...</p>
        </div>
        <div className="testimonials">
          <img src={avatar} alt="testimonial" />
          <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <p>Once more, everything went great.This was my 19th order...</p>
        </div>
        <div className="testimonials">
          <img src={avatar} alt="testimonial" />
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <p>Once more, everything went great.This was my 19th order...</p>
        </div>
        <div className="testimonials">
          <img src={avatar} alt="testimonial" />
          <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
          <p>Once more, everything went great.This was my 19th order...</p>
        </div>
      </div>
    </div>
  );
};
