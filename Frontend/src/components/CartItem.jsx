import { Minus, Plus } from "lucide-react";
const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h3 className="item-name">Item Name</h3>
        <p className="item-price">RM 99</p>
        <p className="item-description">ldkfjsaldkfjalskdjf</p>
      </div>
      <div className="item-controls">
        <button className="item-delete">
          <Minus />
        </button>
        <span className="item-quantity">3</span>
        <button className="item-add">
          <Plus />
        </button>
        <div className="item-total">RM 99</div>
      </div>
      <style jsx>{`
        .cart-item {
          display: flex;
          align-item: center;
          padding: 20px 0;
        }
        .item-details {
          flex: 1;
        }
        .item-name {
          margin: 0 0 5px 0;
        }
        .item-price {
          margin: 0 0 5px 0;
          color: peachpuffy;
        }
        .item-description {
          color: #666;
          margin: 0;
          font-size: 14px;
        }
        .item-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .item-delete {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: lightgrey;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-delete:hover {
          background-color: #e5e7eb;
        }
        .item-quantity {
          font-size: 18px;
          font-weight: bold;
          min-width: 32px;
          text-align: center;
        }
        .item-add {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: lightgrey;
          cursor: pointer;
          display: flex;
          align-item: flex;
          justify-content: center;
        }
        .item-total {
          font-size: 18px;
          font-weigth: bold;
        }
      `}</style>
    </div>
  );
};

export default CartItem;
