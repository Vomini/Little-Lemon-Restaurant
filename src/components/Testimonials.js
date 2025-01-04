import React from "react";
import testimonials from "../testimonials";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="testimonial-image"
              />
              <div className="testimonial-rating">
                {"⭐".repeat(testimonial.rating)}
              </div>
            </div>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
