const express = require("express");
const si = require("systeminformation");
const path = require("path");

const app = express();

app.use(express.json({ extended: false }));

app.get("/cpu", async (req, res) => {
  const data = await si.cpu();
  res.json(data);
});

app.get("/graphic", async (req, res) => {
  const data = await si.graphics();
  res.json(data);
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(5000, () => console.log(`Server is On`));
