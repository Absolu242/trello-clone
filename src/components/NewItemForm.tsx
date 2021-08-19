import React, { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles"
import { useFocus } from "../utils/useFocus"

interface NewItemFromProps {
  onAdd(text: string): void
}

export default function NewItemForm({ onAdd }: NewItemFromProps) {
  const [text, setText] = useState("")
  const inputRef = useFocus()

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
      </NewItemInput>
    </NewItemFormContainer>
  )
}
