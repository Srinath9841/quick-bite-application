import "../styles/navbar.css";
import logo from "../images/logo.webp";
import Dropdown from "./components/DropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  const items = ["Snack", "Lunch", "Breakfast", "Juice", "Dinner", "Sandwich"];
  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
    // You can add your search functionality here
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="spacer"></div>
      <div className="searchBar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="searchInput"
      />
    </div>
    <div style={{width:"12%"}} ></div>
      <ul className="navbarList">
        <li className="navbarItem" onClick={() => navigate('/home')}>
          <p>Home</p>
        </li>
        <li className="navbarItem"  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div>
         <div style={{color:"#646cff"}}>Catalouge</div>
         {open && <div className="dropdownMenu">
            <p className="dropdownItem">Snack</p>
            <p className="dropdownItem">Lunch</p>
            <p className="dropdownItem">BreakFast</p>
            <p className="dropdownItem">Juice</p>
            <p className="dropdownItem">Dinner</p>
            <p className="dropdownItem">Sandwich</p>
         </div>}
         </div>
        </li>
        <li className="navbarItem" onClick={() => navigate('/cart')}>
          <p>Cart</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
