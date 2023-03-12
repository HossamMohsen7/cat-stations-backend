const express = require("express");
const usersRouter = require("./routes/userRouter");
const profilesRouter = require("./routes/profilesRouter");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("./static"));
app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
