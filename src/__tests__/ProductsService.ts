import { orderByPrice } from "../services/ProductsService";


describe('Home page test', () => {

    const productList = [
        {
            "id": 1,
            "image": "test/image.jpg",
            "name": "Camisa gris",
            "price": 100,
            "discount": 20,
            "hasVariants": true
        },
        {
            "id": 2,
            "image": "test/image.jpg",
            "name": "Pantalon gris",
            "price": 90,
            "discount": null,
            "hasVariants": true
        },
        {
            "id": 3,
            "image": "test/image.jpg",
            "name": "Pantalon rojo",
            "price": 10,
            "discount": 50,
            "hasVariants": false
        }
    ];

    it("Must be sorted in ascending order", async () => {
        const sortedArray = [...productList].sort((a, b) => orderByPrice(a, b));

        const forcedArraySort = [
            {
                "id": 3,
                "image": "test/image.jpg",
                "name": "Pantalon rojo",
                "price": 10,
                "discount": 50,
                "hasVariants": false
            },
            {
                "id": 1,
                "image": "test/image.jpg",
                "name": "Camisa gris",
                "price": 100,
                "discount": 20,
                "hasVariants": true
            },
            {
                "id": 2,
                "image": "test/image.jpg",
                "name": "Pantalon gris",
                "price": 90,
                "discount": null,
                "hasVariants": true
            },

        ]

        expect(productList).not.toStrictEqual(sortedArray);
        expect(forcedArraySort).toStrictEqual(sortedArray);
    })

    it("Must be sorted in descending order", async () => {
        const sortedArray = [...productList].sort((a, b) => orderByPrice(b, a));

        const forcedArraySort = [
            {
                "id": 2,
                "image": "test/image.jpg",
                "name": "Pantalon gris",
                "price": 90,
                "discount": null,
                "hasVariants": true
            },
            {
                "id": 1,
                "image": "test/image.jpg",
                "name": "Camisa gris",
                "price": 100,
                "discount": 20,
                "hasVariants": true
            },
            {
                "id": 3,
                "image": "test/image.jpg",
                "name": "Pantalon rojo",
                "price": 10,
                "discount": 50,
                "hasVariants": false
            },

        ]

        expect(productList).not.toStrictEqual(sortedArray);
        expect(forcedArraySort).toStrictEqual(sortedArray);
    })


})
