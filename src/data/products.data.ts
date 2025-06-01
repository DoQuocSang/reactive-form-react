import type { Product } from "../models/product.interface";

export const PRODUCTS: Product[] = [
  {
    id: "P001",
    name: "Nike Air Max 2024",
    brand: 0, // Nike
    description: "High-performance running shoes with exceptional cushioning.",
    weight: 750,
    dateStock: new Date("2024-09-10"),
    price: 120,
    type: 2, // Shoes
    images: [
      {
        id: "I001",
        name: "S1",
        size: 0,
        url: "https://brand.assets.adidas.com/image/upload/v1717008412/Training_SS_24_Strength_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Rapidmove_fc98ca311b.jpg",
      },
      {
        id: "I001",
        name: "S1",
        size: 0,
        url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/g/l/0/-original-imahfhnncgghbqp8.jpeg?q=90&crop=false",
      },
    ],
    visible: false,
    variants: [
      { id: "V001", color: "#000000", size: 0, quantity: 50 },
      { id: "V002", color: "#FFFFFF", size: 2, quantity: 30 },
    ],
  },
  {
    id: "P002",
    name: "Adidas Ultraboost",
    brand: 1, // Adidas
    description: "Comfortable shoes designed for running and casual wear.",
    weight: 680,
    dateStock: new Date("2024-10-15"),
    price: 150,
    type: 0, // Shoes
    images: [],
    visible: true,
    variants: [
      { id: "V003", color: "#0000FF", size: 2, quantity: 20 },
      { id: "V004", color: "#808080", size: 4, quantity: 25 },
    ],
  },
  {
    id: "P003",
    name: "Puma RS-X",
    brand: 2, // Puma
    description: "Stylish retro-inspired sneakers with a bold design.",
    weight: 800,
    dateStock: new Date("2024-09-10"),
    price: 110,
    type: 2, // Shoes
    images: [],
    visible: false,
    variants: [
      { id: "V005", color: "#FF0000", size: 0, quantity: 40 },
      { id: "V006", color: "#000000", size: 4, quantity: 35 },
    ],
  },
  {
    id: "P004",
    name: "Asics Gel-Nimbus 25",
    brand: 3, // Asics
    description: "Premium cushioning shoes for long-distance running.",
    weight: 720,
    dateStock: new Date("2024-08-20"),
    price: 140,
    type: 0, // Shoes
    images: [],
    visible: true,
    variants: [],
  },
  {
    id: "P005",
    name: "New Balance 574",
    brand: 4, // New Balance
    description: "Classic shoes with a timeless silhouette.",
    weight: 600,
    dateStock: new Date("2024-07-12"),
    price: 90,
    type: 2, // Loafer
    images: [],
    visible: true,
    variants: [{ id: "V006", color: "#A52A2A", size: 2, quantity: 20 }],
  },
  {
    id: "P006",
    name: "Reebok Nano X3",
    brand: 5, // Reebok
    description: "Cross-training shoes for all-around performance.",
    weight: 690,
    dateStock: new Date("2024-06-30"),
    price: 130,
    type: 0, // Shoes
    images: [],
    visible: true,
    variants: [
      { id: "V007", color: "#000000", size: 3, quantity: 40 },
      { id: "V008", color: "#FFFFFF", size: 4, quantity: 35 },
    ],
  },
  {
    id: "P007",
    name: "Under Armour HOVR",
    brand: 6, // Under Armour
    description: "Responsive shoes with energy return technology.",
    weight: 700,
    dateStock: new Date("2024-05-18"),
    price: 135,
    type: 1, // Boots
    images: [],
    visible: true,
    variants: [{ id: "V009", color: "#808080", size: 1, quantity: 30 }],
  },
  {
    id: "P008",
    name: "Converse Chuck Taylor",
    brand: 7, // Converse
    description: "Classic high-top sneakers for casual wear.",
    weight: 500,
    dateStock: new Date("2024-04-10"),
    price: 60,
    type: 0, // Shoes
    images: [],
    visible: true,
    variants: [],
  },
  {
    id: "P009",
    name: "Vans Old Skool",
    brand: 8, // Vans
    description: "Iconic skate shoes with a durable design.",
    weight: 550,
    dateStock: new Date("2024-03-22"),
    price: 75,
    type: 2, // Loafer
    images: [],
    visible: false,
    variants: [
      { id: "V10", color: "#0000FF", size: 2, quantity: 50 },
      { id: "V11", color: "#FF0000", size: 4, quantity: 30 },
    ],
  },
  {
    id: "P010",
    name: "Fila Disruptor II",
    brand: 9, // Fila
    description: "Chunky sneakers with a modern twist.",
    weight: 900,
    dateStock: new Date("2024-02-15"),
    price: 95,
    type: 3, // Sandal
    images: [],
    visible: true,
    variants: [{ id: "V12", color: "#FFFFFF", size: 2, quantity: 25 }],
  },
];
