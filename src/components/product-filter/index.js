import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Slider } from "@mui/material";
import { endpoints } from "api/endpoints/endpoints";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as Styled from "./ProductFilter.styled";

const ProductFilter = ({
  onCategoryChange,
  onPriceChange,
  priceRange = [0, 5000],
  selectedCategory,
}) => {
  const { data: categories = [], error } = useQuery({
    queryKey: ["productAllCategories"],
    queryFn: () =>
      axios(endpoints.productAllCategories).then((res) => res.data),
  });

  const [tempPriceRange, setTempPriceRange] = useState(priceRange);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    onCategoryChange(newCategory);
  };

  const handlePriceChange = (event, newValue) => {
    setTempPriceRange(newValue);
  };

  const handleMouseUp = () => {
    onPriceChange(tempPriceRange);
  };

  return (
    <Styled.ProductFilterWrapper>
      <div className="productFilterContainer">
        <div className="productFilter">
          <h4>Price</h4>
          <Slider
            size="small"
            value={tempPriceRange || [0, 5000]}
            onChange={handlePriceChange}
            onMouseUp={handleMouseUp}
            valueLabelDisplay="auto"
            max={5000}
          />
        </div>
        <div className="productFilter">
          <h4>Category</h4>
          <FormControl fullWidth>
            <Select
              labelId="filterSelect"
              id="filterSelect"
              value={selectedCategory}
              onChange={handleCategoryChange}
              sx={{ height: "30px", lineHeight: "30px" }}
              disabled={error}
            >
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </Styled.ProductFilterWrapper>
  );
};

export default ProductFilter;
