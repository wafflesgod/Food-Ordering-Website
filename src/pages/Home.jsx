import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const reviewee = [
    {
        id: 1,
        quote: "The food was absolutely delicious and the delivery was so fast!",
        author: "Jane Doe",
    },
    {
        id: 2,
        quote: "I love the variety on the menu. Every dish I've tried has been fantastic.",
        author: "John Smith",
    },
    {
        id: 3,
        quote: "My go-to place for a quick and tasty meal. The prices are great too!",
        author: "Emily Chen",
    },
];

const dishes = [
    {
        id: 1,
        name: "Burger",
        description: "A juicy grilled patty, layered with fresh lettuce, tomato, cheese, and our secret sauces, served in a soft bun.",
        price: 24,
        image: "food/burger.jpg",
    },
    {
        id: 2,
        name: "Sushi Plate",
        description: "An assortment of delicate bite-sized rolls and nigiri, combining fresh seafood, rice, and seaweed.",
        price: 24.99,
        image: "food/sushi_plate.jpg"
    },
    {
        id: 3,
        name: "Nasi Lemak",
        description: "Malaysia’s signature dish of fragrant coconut rice served with sambal, fried anchovies, peanuts, egg, and cucumber",
        price: 12,
        image: "food/nasi_lemak.jpg",
    },
];

export default function Home() {
  return (
    <div style={{marginTop: "-10px"}}>
        <div className="top-container">
            <h1>Delicious Food, Delivered Fast</h1>
            <p style={{fontSize: "18px", paddingBottom: "10px"}}>Experience the finest cuisine from the comfort of your home. <br/> Fresh ingredients, expert chefs, and lightning-fast delivery.</p>
            <div className="button-container">
                <Link to="/menu">
                    <button className="button"><b>Order Now</b></button>
                </Link>
            </div>
        </div>
        <div>
            <h2>Featured Dishes</h2>
            <div className="dish-grid">
                {dishes.map((dish) => (
                    <div key={dish.id} className="dish-card">
                        <img src={dish.image} alt={dish.name}/>
                        <div className="dish-info">
                            <b>{dish.name}</b>
                            <span>RM{dish.price.toFixed(2)}</span>
                        </div>
                        <p>{dish.description}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="review">
            <h2>What Our Customer Say</h2>
            <div className="review-grid">
                {reviewee.map((review) => ( //reviewee (function name), review (add object to call function)
                    <div key={review.id}>
                        <i>"{review.quote}"</i>
                        <b>- {review.author}</b>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}