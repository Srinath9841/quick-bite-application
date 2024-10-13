import { Reorder } from 'framer-motion';
import '../../styles/gridLoader.css'

const CartGrid = (props) => {

    
    const removeData = (del) =>{
        let removed = false;
        const updatedItem = props.selectedItems.reduce((acc,item) => {
            console.log("acc item",acc,item);
            
            if(item.id === del.id && !removed){
                removed = true;
                return acc;
            }
            return [...acc,item];
        },[])
        console.log("updated id", updatedItem);
        console.log("updated data", updatedItem);
        props.setSelectedItems(updatedItem)

    }
  return (
    <div className="gridContainer">
      {props.selectedItems &&
        props.selectedItems.slice(0, 100).map((item,index) => (
          <div className="gridItem" key={index}>
            <img className="itemImage" src={item.url} alt="loading" />
            <p>{item.title}</p>
            <button className="addToCart" onClick={() =>removeData(item)}>
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};
export default CartGrid;
