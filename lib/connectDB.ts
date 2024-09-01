import "server-only";

import mongoose from "mongoose";

interface ConnectionObject {
  isConnected?: number;
}

const connectionObject: ConnectionObject = {};

export default async function connectDB() {
  if (connectionObject.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/promptlab_base`
    );
    connectionObject.isConnected = connectionInstance.connections[0].readyState;
    console.log(
      `Connected to the database: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("Failed to connect Database");
    process.exit(1);
  }
}
