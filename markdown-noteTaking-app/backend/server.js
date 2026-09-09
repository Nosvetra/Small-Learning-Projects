import app from "./app.js";
import config from "./config/index.js";

async function startServer() {
  try {
    app.listen(config.port, () => {
      console.log(`Ther server is running on Port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start Server", err);
  }
}

startServer();
