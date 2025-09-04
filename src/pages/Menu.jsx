import Card from "../components/Card";
import { useState } from "react";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("malay");
  const menus = {
    Malay: [
      {
        image: "/food/nasi-lemak.jpg",
        name: "Nasi Lemak",
        description:
          "Fragrant coconut rice served with sambal, crispy anchovies, roasted peanuts, and hard-boiled egg.",
        price: "RM12",
        rating: 5,
      },
      {
        image: "/food/rendang.jpg",
        name: "Beef Rendang",
        description:
          "Slow-cooked beef in rich coconut milk and spices until tender and flavorful.",
        price: "RM18",
        rating: 4,
      },
      {
        image: "/food/satay.jpg",
        name: "Chicken Satay",
        description:
          "Skewered and grilled chicken served with peanut sauce, cucumber and onion.",
        price: "RM15",
        rating: 4,
      },
    ],
    Chinese: [
      {
        image: "/food/dim-sum.jpg",
        name: "Dim Sum Platter",
        description:
          "Assorted steamed and fried dumplings including har gow, siu mai, and char siu bao.",
        price: "RM25",
        rating: 5,
      },
      {
        image: "/food/peking-duck.jpg",
        name: "Peking Duck",
        description:
          "Crispy roasted duck served with thin pancakes, spring onions, cucumber and hoisin sauce.",
        price: "RM45",
        rating: 5,
      },
      {
        image: "/food/kungpao-chicken.jpg",
        name: "Kung Pao Chicken",
        description:
          "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce.",
        price: "RM22",
        rating: 4,
      },
    ],
    Indian: [
      {
        image: "/food/butter-chicken.jpg",
        name: "Butter Chicken",
        description:
          "Tender chicken in a creamy tomato-based sauce with aromatic spices and butter.",
        price: "RM20",
        rating: 5,
      },
      {
        image: "/food/biryani.jpg",
        name: "Chicken Biryani",
        description:
          "Fragrant basmati rice cooked with marinated chicken, spices, and herbs.",
        price: "RM18",
        rating: 4,
      },
      {
        image: "/food/naan.jpg",
        name: "Garlic Naan Bread",
        description:
          "Soft leavened bread baked in tandoor and brushed with garlic butter.",
        price: "RM8",
        rating: 4,
      },
    ],
    Western: [
      {
        image: "/food/burger.jpg",
        name: "Yummy Burger",
        description:
          "Juicy beef patty with cheese, lettuce, tomato, onion and special sauce in a brioche bun.",
        price: "RM24",
        rating: 4,
      },
      {
        image: "/food/steak.jpg",
        name: "Grilled Ribeye Steak",
        description:
          "Premium ribeye steak grilled to perfection, served with roasted vegetables and potatoes.",
        price: "RM65",
        rating: 5,
      },
      {
        image: "/food/pasta.jpg",
        name: "Creamy Carbonara",
        description:
          "Classic pasta with bacon, egg, cream, and parmesan cheese.",
        price: "RM22",
        rating: 4,
      },
    ],
    Japanese: [
      {
        image: "/food/sushi.jpg",
        name: "Assorted Sushi Platter",
        description:
          "Fresh selection of nigiri and maki sushi with tuna, salmon, shrimp and vegetables.",
        price: "RM38",
        rating: 5,
      },
      {
        image: "/food/ramen.jpg",
        name: "Tonkotsu Ramen",
        description:
          "Rich pork bone broth noodles with chashu pork, soft-boiled egg, and vegetables.",
        price: "RM28",
        rating: 5,
      },
      {
        image: "/food/teriyaki.jpg",
        name: "Chicken Teriyaki",
        description:
          "Grilled chicken glazed with sweet teriyaki sauce, served with rice and vegetables.",
        price: "RM25",
        rating: 4,
      },
    ],
  };
  return (
    <div className="menu-container">
      <div className="content-container">
        <h1>Our Menu</h1>
        <div className="nav">
          <div className="nav-content">
            {Object.keys(menus).map((menu) => (
              <button
                key={menu}
                onClick={() => setSelectedMenu(menu)}
                className={`${selectedMenu === menu ? "active" : ""}`}
              >
                {menu}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2>{selectedMenu}</h2>
        </div>
        <div className="cards-grid">
          {menus[selectedMenu].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .menu-container {
          padding: 32px 0;
        }
        .content-container h1 {
          font-size: 36px;
          font-weigth: bold;
          text-align: center;
          margin-bottom: 8px;
          margin-top: 0;
        }
        .nav {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .nav-content {
          display: flex;
          gap: 4px;
          border-radius: 8px;
          padding: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav-content button {
          padding: 8px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-content button:hover {
          color: #8b5cf6;
          background-color: #f3f4f6;
        }
        .nav-content button.active {
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          justify-items: center;
        }
      `}</style>
    </div>
  );
};

export default Menu;
