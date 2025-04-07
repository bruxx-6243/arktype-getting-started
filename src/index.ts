import { server } from "./server.js";

const PORT: number = 3000;
const HOST: string = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
