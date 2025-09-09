import { Star } from "lucide-react";

const Card = ({
  image = "/food/burger.jpg",
  name = "Yummy Burger",
  description = "bburgerburgerburgerburgerburgerburgerurgerdslkfjsfksldkfjsldkfjsldkfjslkfjlskjdfskljdf",
  price = "RM999",
  rating = 3,
}) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    handleAddToCart(name, description, price, image);
  };
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 2 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          style={{
            width: "24px",
            height: "24px",
            fill: "#facc15",
            color: "#facc15",
          }}
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <div
          key="half"
          style={{ position: "relative", width: "16px", height: "24px" }}
        >
          <Star
            style={{
              position: "absolute",
              width: "24px",
              height: "24px",
              color: "#d1d5db",
            }}
          />
          <div
            style={{ position: "absolute", overflow: "hidden", width: "12px" }}
          >
            <Star
              style={{
                width: "24px",
                height: "24px",
                fill: "#facc15",
                color: "#facc15",
              }}
            />
          </div>
        </div>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          style={{ width: "24px", height: "24px", color: "#d1d5db" }}
        />
      );
    }
    return stars;
  };
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img className="food-image" src={image} alt={name} />
          <div className="card-front-overlay">
            <h3 className="food-name">{name}</h3>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-overlay">
            <div className="content-top">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="content-bottom">
              <div className="rating">
                <div className="stars">{renderStars(rating)}</div>
              </div>
              <div className="price">
                <span>{price}</span>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 280px;
          height: 350px;
          margin: 1rem auto;
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          transform-origin: center center;
        }

        .card:hover .card-inner {
          transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          overflow: hidden;
          box-shadow: 0 10px 15px black;
          border-radius: 12px;
        }

        .card-front {
          position: relative;
        }

        .card-back {
          transform: rotateY(180deg);
        }
        .food-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-front-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        }
        .card-front-overlay h3 {
          color: #ffdbb6;
          margin: 5px;
        }
        .card-back-overlay {
          background-color: rgba(93, 104, 138, 0.5);
          padding: 0 10px;
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
        }
        .content-top {
          flex: 1;
        }
        .content-top p {
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
          overflow-wrap: break-word;
        }

        .price {
          font-size: 24px;
          font-weight: bold;
        }
        .add-to-cart-btn {
          border-radius: 14px;
          padding: 12px 24px;
          transition: all 0.2s ease;
          cursor: pointer;
          background-color: lightblue;
          color: black;
        }
        .add-to-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Card;
