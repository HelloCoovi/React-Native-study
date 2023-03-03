import { Text } from "react-native";

function ManageExpense({ route }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;
