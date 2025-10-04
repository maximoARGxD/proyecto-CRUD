import { Product, IProduct } from "../models/product";
import { Types } from "mongoose";

export const createProduct = async (data: Partial<IProduct>) => {
  const product = new Product(data);
  return await product.save();
};

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id: string | Types.ObjectId) => {
  return await Product.findById(id);
};

export const updateProduct = async (id: string | Types.ObjectId, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id: string | Types.ObjectId) => {
  return await Product.findByIdAndDelete(id);
};
