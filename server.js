const express = require("express");
const si = require("systeminformation");

const app = express();

app.use(express.json({ extended: false }));

app.get("/cpu", async (req, res) => {
  const data = await si.cpu();
  res.json(data);
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on port ${process.env.PORT || 5000}`)
);
