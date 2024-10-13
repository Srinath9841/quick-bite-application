import "../../styles/gridLoader.css";
const GridLoader = (props) => {
  console.log("grid data", props);
  return (
    
    <div className="gridContainer">
      {props.gridDatas &&
        props.gridDatas.slice(0, 100).map((item) => (
          <div className="gridItem" key={item.id}>
            <img className="itemImage" src={item.url} alt="loading" />
            <p>{item.title}</p>
            <button className="addToCart" onClick={()=>props.addToCart(item)}>Add to Cart</button>
          </div>
        ))}
    </div>

  );
};
export default GridLoader;
