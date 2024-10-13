import React, { useState } from 'react';
import '../../styles/dropDown.css'


const Dropdown = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleSelect = (item) => {
    onSelect(item); // Call the onSelect callback
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdownToggle">
        Catalouge
      </div>
      {isOpen && (
        <ul className="dropdownMenu">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
