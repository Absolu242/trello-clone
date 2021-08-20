import React from "react"
import { useAppState } from "../store/AppStateContext"
import { ColumnContainer, ColumnTitle } from "../styles"
import { AddNewItem } from "../components/AddNewItem"
import Card from "./Card"

interface ColumnProps {
  text: string
  index: number
  id: string
}

export default function Column({ text, index, id }: ColumnProps) {
  const { state, dispatch } = useAppState()

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  )
}
