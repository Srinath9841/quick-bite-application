import "./App.css";
import { BrowserRouter ,Routes, Route  } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/quick-bite-application" element={<LoginPage />} />
          <Route path="/quick-bite-application/home" element={<HomePage setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>} />
          <Route path="/quick-bite-application/cart" element={<Cart setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>} />
          {/* <Route path="/" exact component={LoginPage} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
