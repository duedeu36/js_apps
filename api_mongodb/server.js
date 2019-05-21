const express = require("express");

const app = express();

app.get("/server", (req, res) => {
  res.send(`hallo world from server`);
});

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running on Port ${PORT}`));
