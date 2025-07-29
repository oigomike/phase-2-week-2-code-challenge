import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import sirv from "sirv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(sirv(path.resolve(__dirname, "dist"), { single: true }));

// Serve index.html for any unmatched route (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
