import { Expense } from "../types/expense";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>

      {expenses.length === 0 && (
        <p className="text-gray-500">No expenses added yet.</p>
      )}

      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium">{expense.title}</p>
            <p className="text-sm text-gray-500">{expense.category}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold">₹{expense.amount}</p>
            <button
              onClick={() => onDelete(expense.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;