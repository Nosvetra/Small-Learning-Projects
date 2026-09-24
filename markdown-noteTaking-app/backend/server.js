import app from "./app.js";
import config from "./config/index.js";
import database from "./config/database.js";

async function startServer() {
  try {
    await database.connect();
    app.listen(config.port, () => {
      console.log(`The server is running on Port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start Server", err);
  }
}

startServer();
