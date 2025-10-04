import  mongoose  from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/mongo_ts_crud";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
};
