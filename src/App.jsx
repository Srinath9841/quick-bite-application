import "./App.css";
import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";
import LoginPage from "./src/LoginPage";
import logoBackground from "./images/loginBackground.webp";
import { useState } from "react";
import HomePage from "./src/HomePage"
import Cart from "./src/Cart"


function App() {
  const [selectedItems, setSelectedItems] = useState([])
  console.log("cart updated", selectedItems);
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>} />
          <Route path="/cart" element={<Cart setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>} />
          {/* <Route path="/" exact component={LoginPage} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
