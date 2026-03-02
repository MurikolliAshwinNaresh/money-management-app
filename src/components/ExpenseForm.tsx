import { useState } from "react";
import { Expense } from "../types/expense";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm = ({ onAddExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount || !category) return;

    onAddExpense({
      id: crypto.randomUUID(),
      title,
      amount,
      category,
      date: new Date().toISOString(),
    });

    setTitle("");
    setAmount(0);
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Expense</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-2 rounded"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <input
        type="text"
        placeholder="Category"
        className="w-full border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;