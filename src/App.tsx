import React from "react"
import { AddNewItem } from "./components/AddNewItem"
import Column from "./components/Column"
import { CustomDragLayer } from "./components/CustomDargLayer"
import { useAppState } from "./store/AppStateContext"
import { AppContainer } from "./styles"

function App() {
  const { state, dispatch } = useAppState()
  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  )
}

export default App
