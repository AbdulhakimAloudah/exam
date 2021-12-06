const express = require("express");
const todoRouter = express.Router();



const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} = require("./../controllers/todos");


todoRouter.get("/todos", getAllTodo);

todoRouter.get("/todo", getTodoById);

todoRouter.get("/todos/completed", getCompletedTodos);

todoRouter.post("/todos", createTodo);

todoRouter.put("/todos/:id", completeTodo);

todoRouter.put("/todo", updateTodo);

todoRouter.delete("/delete/:id", deleteTodo);

module.exports = todoRouter;
