import FoodMenu from "../components/FoodMenu";

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <div>
        <ul>
          <li>Malay</li>
          <li>Chinese</li>
          <li>Indian</li>
          <li>Western</li>
          <li>Japanese</li>
        </ul>
      </div>
      <div>
        <h2>Title</h2>
      </div>
      <div>{<FoodMenu />}</div>
    </div>
  );
}

export default Menu;
