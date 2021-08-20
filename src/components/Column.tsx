import React from "react"
import { useAppState } from "../store/AppStateContext"
import { ColumnContainer, ColumnTitle } from "../styles"
import { AddNewItem } from "../components/AddNewItem"
import Card from "./Card"

interface ColumnProps {
  text: string
  index: number
}

export default function Column({ text, index }: ColumnProps) {
  const { state } = useAppState()

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}
