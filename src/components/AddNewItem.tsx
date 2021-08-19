import React, { useState } from "react"
import { AddItemButton } from "../styles"
import NewItemForm from "./NewItemForm"

export interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

export default function AddNewItem(props: AddNewItemProps) {
  const [showForm, setShowForm] = useState(true)
  const { onAdd, toggleButtonText, dark } = props

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
