const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/cpu", (req, res) => {
  res.json("hello");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on port ${process.env.PORT || 5000}`)
);
