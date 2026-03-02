import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// GET all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// POST new expense
router.post("/", async (req, res) => {
  const expense = new Expense(req.body);
  const savedExpense = await expense.save();
  res.json(savedExpense);
});

export default router;