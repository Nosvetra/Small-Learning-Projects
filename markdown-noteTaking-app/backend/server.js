import app from "./app.js";
import config from "./config/index.js";
import dataBase from "./config/database.js";

async function startServer() {
  try {
    await dataBase.connect();
    app.listen(config.port, () => {
      console.log(`The server is running on Port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start Server", err);
  }
}

startServer();
