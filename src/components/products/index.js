import React, { useEffect, useState, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "api/endpoints/endpoints";
import NotFound from "assets/images/notfound.png";
import ProductCard from "components/product-card";
import ProductFilter from "components/product-filter";
import Spinner from "components/spinner";
import ProductFilterBar from "components/product-filter-bar";
import * as Styled from "./Products.styled";

const Products = () => {
  const LIMIT = 16;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOrder, setSortOrder] = useState("asc");

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["products", selectedCategory, priceRange, sortOrder],
    queryFn: ({ pageParam = 0 }) => {
      const skip = pageParam;
      const baseUrl = selectedCategory
        ? `${endpoints.products}/category/${selectedCategory}`
        : endpoints.products;
      const url = `${baseUrl}?limit=${LIMIT}&skip=${skip}&sortBy=title&order=${sortOrder}`;

      return axios(url).then((res) => res.data);
    },
    getNextPageParam: (lastPage) => {
      const totalProducts = lastPage.products.length;
      return totalProducts >= LIMIT ? totalProducts : undefined;
    },
    cacheTime: 1000 * 60 * 5,
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      scrollY + windowHeight >= documentHeight - 50 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleCategoryChange = useCallback(
    (newCategory) => {
      setSelectedCategory(newCategory);
      refetch();
    },
    [refetch]
  );

  const handlePriceChange = useCallback(
    (newPriceRange) => {
      setPriceRange(newPriceRange);
      refetch();
    },
    [refetch]
  );

  const handleSortChange = useCallback(
    (newSortOrder) => {
      setSortOrder(newSortOrder);
      refetch();
    },
    [refetch]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (isLoading) return <Spinner />;

  if (error) return <Styled.Error>{error.message}</Styled.Error>;

  const filteredProducts = data?.pages
    ?.flatMap((page) => page.products)
    ?.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

  return (
    <Styled.ProductsWrapper>
      <ProductFilter
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
        priceRange={priceRange}
        selectedCategory={selectedCategory}
      />

      <Styled.ProductItemsContainer>
        <ProductFilterBar
          onSortChange={handleSortChange}
          selectedOption={sortOrder}
        />

        <Styled.ProductItemsWrapper>
          {filteredProducts?.length === 0 ? (
            <Styled.NoProductsWrapper>
              <img src={NotFound} alt="not-found" />
            </Styled.NoProductsWrapper>
          ) : (
            filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </Styled.ProductItemsWrapper>
      </Styled.ProductItemsContainer>

      {isFetchingNextPage && <Spinner />}
    </Styled.ProductsWrapper>
  );
};

export default Products;
