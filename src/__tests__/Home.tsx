import { render, screen, waitFor } from '@testing-library/react';
import { ProductsProvider } from "../context/ProductsContext";
import { NumberOfColumnsProvider } from "../context/NumberOfColumnsContext";
import { Home } from "../pages/Home";

describe('Home page test', () => {

    it("Must show product name", async () => {

        render(
            <ProductsProvider>
                <NumberOfColumnsProvider>
                    <Home />
                </NumberOfColumnsProvider>
            </ProductsProvider>);
        await waitFor(() => expect(screen.getByText("Camisa gris")).toBeDefined());
    })

    it("Must show price with discount in Home", async () => {

        render(
            <ProductsProvider>
                <NumberOfColumnsProvider>
                    <Home />
                </NumberOfColumnsProvider>
            </ProductsProvider>
        );
        await waitFor(() => expect(screen.getByText("80€(-20%)")).toBeDefined());
    })

    it("Must to have 9 addButtons", async () => {

        render(
            <ProductsProvider>
                <NumberOfColumnsProvider>
                    <Home />
                </NumberOfColumnsProvider>
            </ProductsProvider>
        );
        await waitFor(() => expect(screen.getAllByText('Añadir').length).toBe(9));
    })
})
