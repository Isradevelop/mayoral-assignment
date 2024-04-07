

import { NextPage } from "next";
import { ProductsProvider } from '../context/ProductsContext';

import { NumberOfColumnsProvider } from "context/NumberOfColumnsContext";
import { Home } from "./Home";



const HomePage: NextPage = () => {

  return (
    <ProductsProvider>
      <NumberOfColumnsProvider>
        <Home />
      </NumberOfColumnsProvider>
    </ProductsProvider>
  );
};

export default HomePage;
