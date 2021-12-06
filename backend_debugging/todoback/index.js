const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
require("./db");

const app = express();

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

app.use(cors);
app.use(express.json());
app.use(morgan("dev"));

dotenv.config();



const todoModel = require("./routers/routes/todos");
app.use("/todos", todoModel);











const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});