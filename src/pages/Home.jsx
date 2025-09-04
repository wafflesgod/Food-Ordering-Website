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
            <h2>Featured Dished</h2>
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