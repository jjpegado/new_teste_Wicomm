export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: "Eau de Parfum Chic Woman",
        price: 129.9,
        image: "/images/main/products/p1.png",
    },
    {
        id: 2,
        name: "Eau de Parfum Amakha",
        price: 119.9,
        image: "/images/main/products/p2.png",
    },
    {
        id: 3,
        name: "Perfume Intense Black",
        price: 139.9,
        image: "/images/main/products/p3.png",
    },
    {
        id: 4,
        name: "Essência Premium",
        price: 99.9,
        image: "/images/main/products/p4.png",
    },
    {
        id: 5,
        name: "Kit Perfume e Body Splash",
        price: 149.9,
        image: "/images/main/products/p5.png",
    },
];

export const formatCurrency = (value: number): string =>
    value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
