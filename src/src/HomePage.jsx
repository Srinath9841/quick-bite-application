import { useEffect, useState } from "react";
import GridLoader from "./components/GridLoader";
import Navbar from "./Navbar";

const HomePage = (props) => {
  const [gridDatas, setGridData] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const datas = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((response) => response.json());
    setGridData(datas);
  };
  gridDatas && console.log("home grid", gridDatas);

  const addToCart = async (id) => {
    props.setSelectedItems((prev) =>  [...prev,id])
    console.log("add to cart", props.selectedItems);
    
  }

  return (
    <>
      <Navbar />
      <GridLoader gridDatas={gridDatas} addToCart={addToCart}/>
    </>
  );
};

export default HomePage;
