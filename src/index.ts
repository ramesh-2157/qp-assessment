import app from "./app";

const PORT = 3001;

app.get("/", (req: any, res: any) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
