import React from 'react';
import './Highlights.css';

const dishes = [
  {
    name: 'Greek Salad',
    price: '$11.99',
    image: process.env.PUBLIC_URL + '/images/greeksalad.jpeg',
    description: 'Salad that lets crunchy vegetables shine with no lettuce or other filler.',
  },
  {
    name: 'Shakshuka',
    price: '$24.99',
    image: process.env.PUBLIC_URL + '/images/shakshuka.jpg',
    description: 'Simple combination of simmering tomatoes, onions, garlic, spices, feta and gently poached eggs.',
  },
  {
    name: 'Lemon dessert',
    price: '$8.99',
    image: process.env.PUBLIC_URL + '/images/lemoncake.jpeg',
    description: 'With delicate, lemon cake layers, filled with a zesty lemon curd',
  },
];

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="cards">
        {dishes.map((dish, index) => (
          <div className="card" key={index}>
            <img src={dish.image} alt={dish.name} />
            <div className="card-content">
              <div className="card-title">
                <h3>{dish.name}</h3>
                <span className="price">{dish.price}</span>
              </div>
              <p className="description">{dish.description}</p>
              <a href="/some-page" className="delivery">
                Order Quick Delivery <span role="img" aria-label="scooter">🛵</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
