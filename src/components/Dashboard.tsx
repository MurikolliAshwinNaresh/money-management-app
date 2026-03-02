import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { Expense } from "../types/expense";

const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Money Management Dashboard
      </h1>

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
      />

      <div className="mt-6 text-xl font-bold">
        Total: ₹{total}
      </div>
    </div>
  );
};

export default Dashboard;