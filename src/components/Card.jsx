import "./Card.css";

const Card = ({
  image = "placeholder",
  name = "placeholder",
  description = "placeholder",
  price = "RM00",
  rating = 0,
}) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          style={{
            width: "16px",
            height: "16px",
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
          style={{ position: "relative", width: "16px", height: "16px" }}
        >
          <Star
            style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              color: "#d1d5db",
            }}
          />
          <div
            style={{ position: "absolute", overflow: "hidden", width: "8px" }}
          >
            <Star
              style={{
                width: "16px",
                height: "16px",
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
          style={{ width: "16px", height: "16px", color: "#d1d5db" }}
        />
      );
    }
    return stars;
  };
  return (
    <div className="card">
      <div className="card-front">
        <img src={image} alt={name} />
        <div className="card-front-overlay">
          <h3 className="food-name">
            {name}
          </h3>
        </div>
      </div>
      <div className="card-back">
        <div className="content-top">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="content-bottom">
          <div className="rating"><div className="stars">{renderStars(rating)}</div></div>
          <div className="price">
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
