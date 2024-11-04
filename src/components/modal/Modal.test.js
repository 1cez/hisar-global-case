import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./index";

const mockSetIsModalOpen = jest.fn();

const basketProducts = [
  { id: 1, title: "Product 1", price: 10, images: ["img1.jpg"] },
  { id: 1, title: "Product 1", price: 10, images: ["img1.jpg"] },
  { id: 2, title: "Product 2", price: 15, images: ["img2.jpg"] },
];

test("renders Modal and displays total value correctly", () => {
  render(
    <Modal
      setIsModalOpen={mockSetIsModalOpen}
      basketProducts={basketProducts}
    />
  );

  expect(screen.getByText("Basket Items")).toBeInTheDocument();

  expect(screen.getByText("Total Value: $ 35.00")).toBeInTheDocument();
});

test("groups products by ID and displays quantity", () => {
  render(
    <Modal
      setIsModalOpen={mockSetIsModalOpen}
      basketProducts={basketProducts}
    />
  );

  expect(screen.getAllByText("Product 1").length).toBe(1);
  expect(screen.getByText("Product 2")).toBeInTheDocument();

  expect(screen.getByText("2")).toBeInTheDocument();
});

test("increases and decreases quantity of a product", () => {
  render(
    <Modal
      setIsModalOpen={mockSetIsModalOpen}
      basketProducts={basketProducts}
    />
  );

  fireEvent.click(screen.getAllByText("+")[0]);
  expect(screen.getAllByText("3")[0]).toBeInTheDocument();

  fireEvent.click(screen.getAllByText("-")[0]);
  expect(screen.getAllByText("2")[0]).toBeInTheDocument();
});

test("closes modal when close icon is clicked", () => {
  render(
    <Modal
      setIsModalOpen={mockSetIsModalOpen}
      basketProducts={basketProducts}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: /close/i }));
  expect(mockSetIsModalOpen).toHaveBeenCalledWith(false);
});
