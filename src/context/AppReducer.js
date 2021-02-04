export default (state, action) => {
  switch (action.type) {
    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        )
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case "EDIT_EXPENSE":
      const updatedExpense = action.payload;

      const updatedExpenses = state.expenses.map((expense) => {
        if (expense.id === updatedExpense.id) {
          return updatedExpense;
        }
        return expense;
      });

      return {
        ...state,
        expenses: updatedExpenses
      };
    default:
      return state;
  }
};
