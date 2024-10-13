import GridLoader from "./components/GridLoader";
import Navbar from "./Navbar";
import CartGrid from "./components/CartGrid";
const Cart = (props) => {
  console.log("cart datas", props.selectedItems);

  return (
    <div>
      <Navbar />
      {/* <GridLoader gridDatas={props.selectedItems}/> */}
      <CartGrid selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems}/>
    </div>
  );
};
export default Cart;
