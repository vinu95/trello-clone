import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate a App" />
      <Card text="Test your App" />
      <Card text="Begin to Learn React" />
      <AddNewItem toggleButtonText="+ Add another card" onAdd={() => console.log("New item added")} dark/>
    </ColumnContainer>
  );
};
