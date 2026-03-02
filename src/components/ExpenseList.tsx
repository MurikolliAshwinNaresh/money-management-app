import { Expense } from "../types/expense";

interface Props {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: Props) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>

      {expenses.map((expense) => (
        <div
          key={expense._id}
          className="bg-white p-4 rounded shadow mb-2"
        >
          <p className="font-medium">{expense.title}</p>
          <p>₹{expense.amount}</p>
          <p className="text-sm text-gray-500">
            {expense.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;