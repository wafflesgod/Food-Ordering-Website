import "./Card.css";

export default function Card({
  image = "placeholder",
  name = "placeholder",
  description = "placeholder",
  price = "RM00",
  rating = 0,
}) {
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
    if (hasHalfStar){
        stars.push(
            <div key="half" style={{ position: "relatvie", width: "16px", height: "16px"}}>
                <Star style={{ position: "absolute", width: "16px", height:}}/>
                <div style={{ position: "absolute", overflow: "hidden", width: "8px"}}>
                    <Star style={{ width: "16px", height: "16px", fill: "$facc15", color: "#facc15"}}/>
                </div>
            </div>
        )
    }
    const remaining
  };
  return <div>hi</div>;
}
