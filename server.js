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

app.get("/memory", async (req, res) => {
  const data = await si.mem();
  res.json(data);
});

app.get("/battery", async (req, res) => {
  const data = await si.battery();
  res.json(data);
});

app.get("/disk", async (req, res) => {
  const data = await si.diskLayout();
  res.json(data);
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(process.env.PORT || 5000, () => console.log(`Server is On`));
