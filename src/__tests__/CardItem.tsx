import { render, screen } from "@testing-library/react"
import { CardItem } from "../components/CardItem"

describe('CardItem component', () => {

    const product = {
        "id": 1,
        "image": "test/image.jpg",
        "name": "Camisa gris",
        "price": 100,
        "discount": 20,
        "hasVariants": true
    };

    it("Must show product name", () => {

        render(<CardItem product={product} />);
        expect(screen.getByText("Camisa gris")).toBeDefined();
    })

    it("Must show price with discount", () => {

        render(<CardItem product={product} />);
        expect(screen.getByText("80€(-20%)")).toBeDefined();
    })
})
