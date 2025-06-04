import type { IProduct } from "../models/product.interface";

export const PRODUCTS: IProduct[] = [
  {
    id: "P001",
    name: "Nike Air Max 2024 #1",
    brand: "skechers",
    description: "High-performance running shoes with exceptional cushioning.",
    weight: 637,
    dateStock: "2024-11-04",
    price: 95,
    type: "loafers",
    images: [],
    visible: true,
    variants: [
      { id: "V001", color: "#ea5141", size: 4, quantity: 41 },
      { id: "V002", color: "#b22469", size: 4, quantity: 48 }
    ],
    tags: [
      { id: "tag_0", name: "premium" },
      { id: "tag_1", name: "sale" }
    ],
    offer: { start: "2024-08-01", end: "2024-09-01", percent: 5 }
  },
  {
    id: "P002",
    name: "Adidas Ultraboost #2",
    brand: "vans",
    description: "Comfortable shoes designed for running and casual wear.",
    weight: 822,
    dateStock: "2024-03-05",
    price: 110,
    type: "loafers",
    images: [],
    visible: true,
    variants: [
      { id: "V003", color: "#cf3c9b", size: 1, quantity: 24 },
      { id: "V004", color: "#664983", size: 4, quantity: 44 }
    ],
    tags: [
      { id: "tag_0", name: "sale" },
      { id: "tag_1", name: "casual" },
      { id: "tag_2", name: "bestseller" }
    ],
    offer: undefined
  },
  {
    id: "P003",
    name: "Puma RS-X #3",
    brand: "new_balance",
    description: "Stylish retro-inspired sneakers with a bold design.",
    weight: 836,
    dateStock: "2024-10-20",
    price: 135,
    type: "sandals",
    images: [],
    visible: false,
    variants: [
      { id: "V005", color: "#6fa570", size: 3, quantity: 36 },
      { id: "V006", color: "#007905", size: 2, quantity: 26 }
    ],
    tags: [
      { id: "tag_0", name: "premium" },
      { id: "tag_1", name: "new" },
      { id: "tag_2", name: "bestseller" }
    ],
    offer: { start: "2024-08-01", end: "2024-09-01", percent: 5 }
  },
  {
    id: "P004",
    name: "Asics Gel-Nimbus 25 #4",
    brand: "asics",
    description: "Premium cushioning shoes for long-distance running.",
    weight: 686,
    dateStock: "2024-11-18",
    price: 90,
    type: "boots",
    images: [],
    visible: true,
    variants: [
      { id: "V007", color: "#4290a0", size: 0, quantity: 44 },
      { id: "V008", color: "#3291b9", size: 3, quantity: 36 }
    ],
    tags: [
      { id: "tag_0", name: "bestseller" },
      { id: "tag_1", name: "limited" }
    ],
    offer: undefined
  },
  {
    id: "P005",
    name: "New Balance 574 #5",
    brand: "converse",
    description: "Classic shoes with a timeless silhouette.",
    weight: 629,
    dateStock: "2024-10-08",
    price: 95,
    type: "slippers",
    images: [],
    visible: false,
    variants: [
      { id: "V009", color: "#fdeb65", size: 2, quantity: 43 },
      { id: "V010", color: "#c32cfa", size: 0, quantity: 30 }
    ],
    tags: [
      { id: "tag_0", name: "limited" },
      { id: "tag_1", name: "bestseller" },
      { id: "tag_2", name: "sale" },
      { id: "tag_3", name: "premium" }
    ],
    offer: { start: "2024-08-01", end: "2024-09-01", percent: 15 }
  },
  {
    id: "P006",
    name: "Reebok Nano X3 #6",
    brand: "vans",
    description: "Cross-training shoes for all-around performance.",
    weight: 663,
    dateStock: "2024-12-07",
    price: 150,
    type: "boots",
    images: [],
    visible: false,
    variants: [
      { id: "V011", color: "#f86780", size: 3, quantity: 23 },
      { id: "V012", color: "#11ca30", size: 2, quantity: 44 }
    ],
    tags: [
      { id: "tag_0", name: "sale" },
      { id: "tag_1", name: "new" },
      { id: "tag_2", name: "bestseller" }
    ],
    offer: undefined
  },
  {
    id: "P007",
    name: "Under Armour HOVR #7",
    brand: "asics",
    description: "Responsive shoes with energy return technology.",
    weight: 688,
    dateStock: "2024-10-07",
    price: 110,
    type: "slippers",
    images: [],
    visible: true,
    variants: [
      { id: "V013", color: "#f6fea1", size: 2, quantity: 37 },
      { id: "V014", color: "#46b08c", size: 3, quantity: 38 }
    ],
    tags: [
      { id: "tag_0", name: "sale" },
      { id: "tag_1", name: "casual" },
      { id: "tag_2", name: "bestseller" },
      { id: "tag_3", name: "new" }
    ],
    offer: { start: "2024-08-01", end: "2024-09-01", percent: 0 }
  },
  {
    id: "P008",
    name: "Converse Chuck Taylor #8",
    brand: "converse",
    description: "Classic high-top sneakers for casual wear.",
    weight: 641,
    dateStock: "2024-08-12",
    price: 140,
    type: "sneakers",
    images: [],
    visible: true,
    variants: [
      { id: "V015", color: "#38a194", size: 1, quantity: 48 },
      { id: "V016", color: "#c59573", size: 2, quantity: 42 }
    ],
    tags: [
      { id: "tag_0", name: "casual" },
      { id: "tag_1", name: "bestseller" }
    ],
    offer: undefined
  },
  {
    id: "P009",
    name: "Vans Old Skool #9",
    brand: "reebok",
    description: "Iconic skate shoes with a durable design.",
    weight: 899,
    dateStock: "2024-08-09",
    price: 140,
    type: "slippers",
    images: [],
    visible: true,
    variants: [
      { id: "V017", color: "#9ddd53", size: 1, quantity: 25 },
      { id: "V018", color: "#4d2cbd", size: 2, quantity: 38 }
    ],
    tags: [
      { id: "tag_0", name: "new" },
      { id: "tag_1", name: "casual" },
      { id: "tag_2", name: "bestseller" },
      { id: "tag_3", name: "premium" }
    ],
    offer: { start: "2024-08-01", end: "2024-09-01", percent: 5 }
  },
  {
    id: "P0010",
    name: "Fila Disruptor II #10",
    brand: "nike",
    description: "Chunky sneakers with a modern twist.",
    weight: 718,
    dateStock: "2024-11-24",
    price: 95,
    type: "sandals",
    images: [],
    visible: false,
    variants: [
      { id: "V019", color: "#e151e3", size: 3, quantity: 28 },
      { id: "V020", color: "#085b32", size: 2, quantity: 40 }
    ],
    tags: [
      { id: "tag_0", name: "premium" },
      { id: "tag_1", name: "sale" }
    ],
    offer: undefined
  }
]