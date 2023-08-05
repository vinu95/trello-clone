import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles"

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem toggleButtonText="+ Add another List" onAdd={() => console.log("Item created")} />
    </AppContainer>
  );
};
