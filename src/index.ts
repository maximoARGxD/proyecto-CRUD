import { connectDB } from "./database/database";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "./service/productsservice";
import { Types } from "mongoose";

const run = async () => {
  await connectDB();

  const newProduct = await createProduct({ name: "Laptop", price: 1200 });
  console.log("Producto creado:", newProduct);

  const products = [
    { name: "Laptop Dell XPS 13", price: 1200, inStock: true },
    { name: "Smartphone Samsung Galaxy S23", price: 999, inStock: true },
    { name: "Monitor LG 27\" UltraWide", price: 350, inStock: true },
    { name: "Teclado mecánico Logitech", price: 120, inStock: true },
    { name: "Mouse inalámbrico Razer", price: 80, inStock: true },
    { name: "Auriculares Sony WH-1000XM5", price: 400, inStock: true },
    { name: "Tablet Apple iPad Air", price: 600, inStock: true },
    { name: "Disco SSD Samsung 1TB", price: 150, inStock: true },
    { name: "Impresora HP LaserJet", price: 200, inStock: true },
    { name: "Webcam Logitech C920", price: 70, inStock: true },
  ];

  for (const productData of products) {
    const newProduct = await createProduct(productData);
    console.log("Producto creado:", newProduct);
  }

  console.log("Se han insertado 10 productos");

  const allProducts = await getAllProducts();
  console.log("Todos los productos:", allProducts);

  
  const id = newProduct._id as Types.ObjectId;

  const productById = await getProductById(id);
  console.log("Producto por ID:", productById);

  const updatedProduct = await updateProduct(id, { price: 1100 });
  console.log("Producto actualizado:", updatedProduct);

  const deletedProduct = await deleteProduct(id);
  console.log("Producto eliminado:", deletedProduct);

  process.exit(0);
};

run();
