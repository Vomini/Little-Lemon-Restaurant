import React from "react";
import recipes from "../recipes";

const Menu = () => {
  
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>

              <p>{recipe.description}</p>

              <p><strong>
                Order Delivery</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
