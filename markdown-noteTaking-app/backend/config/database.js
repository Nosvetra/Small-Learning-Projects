import mongoose from "mongoose";

class dataBaseConfig {
  static async connect() {
    try {
      const mongoDbUri = process.env.MONGODB_CONNECT_URI;
      if (!mongoDbUri)
        throw new Error(
          "Mongodb Connection URI is not defined in the env file",
        );
      const options = {
        maxPoolSize: 10,
        serverSelectionTImeoutMS: 5000,
        socketTimeOutMS: 4500,
      };
      await mongoose.connect(mongoDbUri, options);
      console.log("Database Connected");
    } catch (err) {
      console.log("Failed to connect to the database", err);
    }
  }
  static async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Database disconnected successfully");
    } catch (err) {
      console.log(err);
    }
  }
}

export default dataBaseConfig;
