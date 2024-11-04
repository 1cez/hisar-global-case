import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { Radio, FormControlLabel } from "@mui/material";
import * as Styled from "./ProductFilterBar.styled";

const ProductFilterBar = ({ onSortChange, selectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    onSortChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <Styled.ProductFilterBar>
      <BiFilter
        size={32}
        className="productFilterIcon"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <Styled.ProductFilterDropdown>
          <FormControlLabel
            control={
              <Radio
                checked={selectedOption === "asc"}
                onChange={() => handleOptionSelect("asc")}
                value="asc"
              />
            }
            label="A-Z"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedOption === "desc"}
                onChange={() => handleOptionSelect("desc")}
                value="desc"
              />
            }
            label="Z-A"
          />
        </Styled.ProductFilterDropdown>
      )}
    </Styled.ProductFilterBar>
  );
};

export default ProductFilterBar;
