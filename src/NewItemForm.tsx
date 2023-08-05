import { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles"
import { useFocus } from "./utils/useFocus"

type newItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: newItemFormProps) => {
    const [text, setText] = useState<string>('')
    const inputRef = useFocus()

    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            onAdd(text)
        }
    }
    return (
      <NewItemFormContainer>
        <NewItemInput
          ref={inputRef}
          defaultValue={text}
          onClick={(e) => setText((e.target as HTMLInputElement).value)}
          onKeyDown={handleAddText}
        />
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
      </NewItemFormContainer>
    );
}