import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    
    if (!mongoUrl) {
      console.error("MONGO_URL environment variable is not set!");
      // Use a fallback local MongoDB for development
      const fallbackUrl = "mongodb://localhost:27017/fooddeliverydb";
      console.log("Using fallback local MongoDB:", fallbackUrl);
      await mongoose.connect(fallbackUrl);
    } else {
      console.log("Connecting to local MongoDB:", mongoUrl);
      await mongoose.connect(mongoUrl);
    }
    
    console.log("✅ MongoDB Connected Successfully to fooddeliverydb database");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    console.log("📝 Make sure MongoDB is running on localhost:27017");
    console.log("💡 You can install MongoDB Community Server or use MongoDB Compass");
    console.log("🔄 App will continue running, but database features won't work");
  }
};
