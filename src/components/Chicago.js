import React from "react";
import image1 from "../images/restaurant.jpg";
import image2 from "../images/Mario and Adrian b.jpg";
import "./chicago.css";

const Chicago = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex
          leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
          Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
          blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id,
          vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae
          lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit
          consequat. In dictum ligula in elit euismod malesuada. Curabitur
          varius augue id tempus ultricies. Mauris suscipit porta odio, et
          pretium nibh scelerisque ut.
        </p>
      </div>
      <div className="about-images">
        <img
          src={image1} // Replace with actual image URL
          alt="Restaurant ambiance"
          className="image-top"
          width="60px"
          height="60px"
        />
        <img
          src={image2} // Replace with actual image URL
          alt="Chefs in the kitchen"
          className="image-bottom"
          width="60px"
          height="60px"
        />
      </div>
    </section>
  );
};

export default Chicago;
