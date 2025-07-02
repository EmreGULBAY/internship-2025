import { createServer } from "./app";


const main = () => {
  const app = createServer();

  const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

  process.on("SIGTERM", () => {
    server.close();
    process.exit(0);
  });

  process.on("SIGINT", () => {
    server.close();
    process.exit(0);
  });

  process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception", error);
    server.close();
    process.exit(1);
  });

  process.on("unhandledRejection", (error) => {
    console.log("Unhandled Rejection", error);
    server.close();
    process.exit(1);
  });
};

main();